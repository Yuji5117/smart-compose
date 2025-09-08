import { useEffect, useRef, useState } from 'react';
import { EditorToolbar } from './EditorToolbar';

type EditorPanelProps = {
  output: string;
};

export const EditorPanel: React.FC<EditorPanelProps> = ({ output }) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');

  useEffect(() => {
    if (output) setText(output);
  }, [output]);

  const getSelection = () => {
    const textarea = textareaRef.current;
    const start = textarea?.selectionStart;
    const end = textarea?.selectionEnd;
    const selected = text.slice(start, end);
    return { start, end, selected };
  };

  const handleRewriteClick = () => {
    const { selected } = getSelection();
    if (!selected) return;

    const { start, end } = getSelection();
    setText((prev) => prev.slice(0, start) + '入れ替えました。' + prev.slice(end))
  };

  return (
    <div className="flex w-full flex-col gap-y-4 rounded-lg border border-[#e5e7eb] p-4">
      <EditorToolbar output={text} handleRewriteClick={handleRewriteClick} />
      <textarea
        ref={textareaRef}
        value={text}
        className="w-full rounded-md border border-[#e5e7eb] p-2"
        rows={20}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};
