'use client';

import React, { useActionState, useState } from 'react';

import { Input } from './Input';
import { InputField } from './InputField';
import { Select } from './Select';
import { generateJobPostiongAction } from '@/feature/job-posting/actions/generateJobPostiong';
import { JobFormInput } from '../../schemas/schemas';

const INITIAL: JobFormInput = {
  jobType: '',
  keywords: '',
  salary: '',
  location: '',
  tone: '',
};

const TONE_OPTIONS = [
  { value: 'polite', label: '丁寧' },
  { value: 'friendly', label: 'フレンドリー' },
  { value: 'casual', label: 'カジュアル' },
  { value: 'formal', label: 'フォーマル' },
  { value: 'professional', label: 'プロフェッショナル' },
  { value: 'approachable', label: '親しみやすい' },
  { value: 'passionate', label: '情熱的' },
  { value: 'trustworthy', label: '信頼できる' },
  { value: 'innovative', label: '革新的' },
  { value: 'warm', label: '温かい' },
];

export const JobInputPanel = () => {
  const [state, formAction] = useActionState(
    generateJobPostiongAction,
    INITIAL
  );

  return (
    <div className="flex w-2/5 flex-col gap-y-6 rounded-lg border border-[#e5e7eb] p-4">
      <h2 className="text-xl">求人の原稿を作成しよう</h2>
      <form action={formAction} className="flex flex-col gap-y-4">
        <InputField label="求人種別">
          <Input
            name="jobType"
            defaultValue={state.values?.jobType}
            placeholder="例) 人材"
          />
        </InputField>
        <InputField label="キーワード">
          <Input
            name="keywords"
            defaultValue={state.values?.keywords}
            placeholder="例) 未経験歓迎"
          />
        </InputField>
        <InputField label="給与">
          <Input
            name="salary"
            defaultValue={state.values?.salary}
            placeholder="例) 月給30万円〜"
          />
        </InputField>
        <InputField label="勤務地">
          <Input
            name="location"
            defaultValue={state.values?.location}
            placeholder="例) 東京、大阪"
          />
        </InputField>
        <InputField label="文章のトーン">
          <Select
            options={TONE_OPTIONS}
            name="tone"
            defaultValue={state.values?.tone}
            placeholder="選択してください"
          />
        </InputField>
        <button className="bg-primary hover:bg-primary/80 mt-4 cursor-pointer rounded-md px-2 py-2 text-sm text-white">
          文章を生成する
        </button>
        {state && <p>{state.tone}</p>}
      </form>
    </div>
  );
};
