import { useEffect, useRef, useState } from 'react';
import { EditorToolbar } from './EditorToolbar';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type EditorPanelProps = {
  output: string;
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
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>('');
  const editor = useEditor({
    extensions: [StarterKit],
    content: textToHTML(output ?? ''),
    immediatelyRender: false,
    editorProps: {
      attributes: { class: 'w-full rounded-md border border-[#e5e7eb] p-4' },
    },
  });

  useEffect(() => {
    if (!editor) return;
    const incoming = textToHTML(output ?? '');

    if (editor.getHTML() !== incoming) {
      editor.commands.setContent(incoming);
    }
  }, [output, editor]);

  const handleRewriteClick = () => {
    if (!editor) return;
    const { from, to } = editor.state.selection;
    if (from === to) return;

    try {
      const rewritten = '入れ替えました';
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
        handleRewriteClick={handleRewriteClick}
      />
      <EditorContent editor={editor} />
    </div>
  );
};
