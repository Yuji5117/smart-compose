'use server';

import { openai } from '@/libs/openai';

export type RewriteMode = 'paraphrase' | 'expand' | 'condense';

type Params = { selected: string; mode: RewriteMode };

export const rewriteSelection = async ({ selected, mode }: Params) => {
  if (!selected || !selected.trim()) return selected;

  const directive =
    mode === 'paraphrase'
      ? '意味を変えずに、別の自然な言い回しに書き換えてください。'
      : mode === 'expand'
        ? '対象文を説明や補足を加えて詳しくしてください。'
        : '対象文を要点を保ちつつ簡潔に短くしてください。';

  const messages = [
    {
      role: 'system' as const,
      content: 'You are a skilled Japanese editor.',
    },
    {
      role: 'user' as const,
      content:
        `次の文章を${directive}\n` +
        `\n# 対象文\n${selected}\n` +
        `\n# 出力要件\n- 対象文と同じ言語（日本語）で返す\n- 文章のみを返す`,
    },
  ];

  try {
    const res = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      temperature: 0.3,
      messages,
    });

    console.log({ res });

    return res.choices[0]?.message?.content?.trim() ?? selected;
  } catch (error) {
    return 'エラー';
  }
};
