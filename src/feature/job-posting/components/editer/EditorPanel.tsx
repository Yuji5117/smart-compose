import { useEffect, useState } from 'react';
import { EditorToolbar } from './EditorToolbar';

type EditorPanelProps = {
  output: string;
};

export const EditorPanel: React.FC<EditorPanelProps> = ({ output }) => {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (output) setText(output);
  }, [output]);

  return (
    <div className="flex w-full flex-col gap-y-4 rounded-lg border border-[#e5e7eb] p-4">
      <EditorToolbar output={output} />
      <textarea
        defaultValue={text}
        className="w-full rounded-md border border-[#e5e7eb] p-2"
        rows={20}
      />
    </div>
  );
};
