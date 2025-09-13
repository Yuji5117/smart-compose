'use server';

import { openai } from '@/libs/openai';
import { JobFormSchema } from '../schemas/schemas';

export const generateJobPostiongAction = async (
  _prev: string | null,
  formData: FormData
): Promise<any | null> => {
  const raw = {
    jobType: formData.get('jobType') ?? '',
    keywords: formData.get('keywords') ?? '',
    salary: formData.get('salary') ?? '',
    location: formData.get('location') ?? '',
    tone: formData.get('tone') ?? '',
  };

  const parsed = JobFormSchema.safeParse(raw);

  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return {
      values: {
        jobType: raw.jobType,
        keywords: raw.keywords,
        salary: raw.salary,
        location: raw.location,
        tone: raw.tone,
      },
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
