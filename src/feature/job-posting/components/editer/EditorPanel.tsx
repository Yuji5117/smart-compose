import { EditorToolbar } from './EditorToolbar';

export const EditorPanel = () => {
  return (
    <div className="flex w-full gap-y-4 flex-col rounded-lg border border-[#e5e7eb] p-4">
      <EditorToolbar />
      <textarea className="w-full rounded-md border border-[#e5e7eb] p-2" rows={20} />
    </div>
  );
};
