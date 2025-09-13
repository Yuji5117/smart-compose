'use client';

import { Copy, PencilLine } from 'lucide-react';
import { useState } from 'react';

import { ToolbarButton } from './ToolbarButton';

type EditorToolbarProps = {
  output: string;
  handleRewriteClick: () => void;
};

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  output,
  handleRewriteClick,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="flex flex-row gap-x-4 rounded-lg border border-[#e5e7eb] bg-gray-50 p-4">
      <ToolbarButton
        onClick={handleRewriteClick}
        icon={<PencilLine size={16} />}
      >
        書き換え
      </ToolbarButton>
      <ToolbarButton onClick={handleCopy} icon={<Copy size={16} />}>
        {copied ? 'コピーしました' : 'コピー'}
      </ToolbarButton>
    </div>
  );
};
