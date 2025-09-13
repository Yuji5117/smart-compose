'use server';

import { openai } from '@/libs/openai';

import { JobFormInput, JobFormRaw, JobFormSchema } from '../schemas/schemas';

type FieldErrors<T> = Partial<Record<keyof T, string[]>>;

export type ActionState = {
  values: Partial<JobFormInput> | JobFormRaw;
  errors?: FieldErrors<JobFormInput>;
  output?: string;
  message?: string;
};

const getString = (formData: FormData, key: string) => {
  const val = formData.get(key);
  return typeof val === 'string' ? val : '';
};

export const generateJobPostiongAction = async (
  _prev: ActionState,
  formData: FormData
): Promise<ActionState> => {
  const raw = {
    jobType: getString(formData, 'jobType'),
    keywords: getString(formData, 'keywords'),
    salary: getString(formData, 'salary'),
    location: getString(formData, 'location'),
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

  const res = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful assistant for job postings.',
      },
      {
        role: 'user',
        content: `求人種別:${data.jobType}\nキーワード:${data.keywords}\n給与:${data.salary}\n勤務地:${data.location}\nトーン:${data.tone}\nこの条件で求人文を日本語で作成してください。`,
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
