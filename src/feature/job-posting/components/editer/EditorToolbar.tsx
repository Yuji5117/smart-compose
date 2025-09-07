'use client';

import { Copy, PencilLine } from 'lucide-react';
import { ToolbarButton } from './ToolbarButton';

export const EditorToolbar = () => {
  return (
    <div className="flex flex-row gap-x-4 rounded-lg border border-[#e5e7eb] bg-gray-50 p-4">
      <ToolbarButton
        onClick={() => console.log('書き換え')}
        icon={<PencilLine size={16} />}
      >
        書き換え
      </ToolbarButton>
      <ToolbarButton
        onClick={() => console.log('コピー')}
        icon={<Copy size={16} />}
      >
        コピー
      </ToolbarButton>
    </div>
  );
};
