'use server';

import { openai } from '@/libs/openai';

import { JobFormInput, JobFormRaw, JobFormSchema } from '../schemas/schemas';
import { getString, getStringArray } from '../utils/formData';

type FieldErrors<T> = Partial<Record<keyof T, string[]>>;

export type ActionState = {
  values: Partial<JobFormInput> | JobFormRaw;
  errors?: FieldErrors<JobFormInput>;
  output?: string;
  message?: string;
};

export const generateJobPostiongAction = async (
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> => {
  const raw = {
    role: getString(formData, 'role'),
    keywords: getStringArray(formData, 'keywords[]'),
    salary: getString(formData, 'salary'),
    location: getStringArray(formData, 'location[]'),
    benefits: getStringArray(formData, 'benefits[]'),
    sellingPoints: getStringArray(formData, 'sellingPoints[]'),
    tone: getString(formData, 'tone'),
  };

  const parsed = JobFormSchema.safeParse(raw);

  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      values: raw,
      errors: flat.fieldErrors,
      message: '入力エラーがあります',
    };
  }

  const data = parsed.data;
  const keywordsPrompt = data.keywords.join('・');

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content:
          'You are a helpful assistant for creating attractive and clear Japanese job postings. Always structure the output in the specified format and do not add extra explanations.',
      },
      {
        role: 'user',
        content: `求人職種: ${data.role}
          キーワード: ${keywordsPrompt}
          給与: ${data.salary}
          勤務地: ${data.location.join('・') || '特になし'}
          トーン: ${data.tone}
          福利厚生:
          ${data.benefits.join('・') || '特になし'}
          打ち出しポイント:
          ${data.sellingPoints.join('・') || '自動生成してください'}
          この条件で求人文を日本語で作成してください。`,
      },
    ],
  });

  const output = res.choices[0]?.message.content ?? '';

  return {
    values: data,
    output,
    message: '生成しました',
  };
};
