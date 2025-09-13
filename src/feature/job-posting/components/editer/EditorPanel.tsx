import { EditorContent, useEditor } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';
import StarterKit from '@tiptap/starter-kit';
import { useEffect } from 'react';

import { RewriteMode, rewriteSelection } from '../../actions/rewriteSelection';

import { EditorToolbar } from './EditorToolbar';

type EditorPanelProps = {
  output: string | undefined;
};

function textToHTML(txt: string) {
  if (!txt) return '<p></p>';
  // 改行を <br> にして段落に包む（最小実装）
  const escaped = txt
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return `<p>${escaped.replace(/\n/g, '<br />')}</p>`;
}

export const EditorPanel: React.FC<EditorPanelProps> = ({ output }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: textToHTML(output ?? ''),
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class:
          'w-full rounded-md border border-[#e5e7eb] p-4 h-140 overflow-y-auto',
      },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const incoming = textToHTML(output ?? '');

    if (editor.getHTML() !== incoming) {
      editor.commands.setContent(incoming);
    }
  }, [output, editor]);

  const handleRewriteClick = async (mode: RewriteMode) => {
    if (!editor) return;
    const { from, to } = editor.state.selection;
    if (from === to) return;

    const selected = editor.state.doc.textBetween(from, to, '\n');

    try {
      const rewritten = await rewriteSelection({ selected, mode });

      editor
        .chain()
        .focus()
        .insertContentAt({ from, to }, rewritten)
        .setTextSelection({
          from: from + rewritten.length,
          to: from + rewritten.length,
        })
        .run();
    } catch (error) {
      console.error(error);
    }
  };

  if (!editor) return null;

  return (
    <div className="flex w-full flex-col gap-y-4 rounded-lg border border-[#e5e7eb] p-4">
      <EditorToolbar
        output={editor?.getText()}
        handleRewriteClick={() => handleRewriteClick('paraphrase')}
      />
      <EditorContent editor={editor} />
      <BubbleMenu editor={editor}>
        <div className="flex items-center gap-1 rounded-lg border border-[#e5e7eb] bg-white p-1 shadow">
          <button
            onClick={() => handleRewriteClick('condense')}
            className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-gray-100"
          >
            短く
          </button>
          <button
            onClick={() => handleRewriteClick('expand')}
            className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-gray-100"
          >
            長く
          </button>
          <button
            onClick={() => handleRewriteClick('paraphrase')}
            className="cursor-pointer rounded px-2 py-1 text-sm hover:bg-gray-100"
          >
            他の言い換え
          </button>
        </div>
      </BubbleMenu>
    </div>
  );
};
