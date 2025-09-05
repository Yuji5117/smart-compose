import React from 'react';
import { Input } from './Input';
import { InputField } from './InputField';

export const JobInputPanel = () => {
  return (
    <div className="flex w-4/12 flex-col gap-y-6 rounded-lg border border-[#e5e7eb] p-4">
      <h2 className="text-xl">求人の原稿を作成しよう</h2>
      <form action="" className="flex flex-col gap-y-4">
        <InputField label="求人種別" required>
          <Input placeholder="例) 人材" />
        </InputField>
        <InputField label="キーワード" error={'必須項目です'} required>
          <Input placeholder="例) 未経験歓迎" />
        </InputField>
        <InputField label="給与" required>
          <Input placeholder="例) 月給30万円〜" />
        </InputField>
        <InputField label="勤務地">
          <Input placeholder="例) 東京、大阪" />
        </InputField>
      </form>
    </div>
  );
};
