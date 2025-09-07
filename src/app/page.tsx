import { EditorPanel } from '@/feature/job-posting/components/editer/EditorPanel';
import { JobInputPanel } from '@/feature/job-posting/components/input/JobInputPanel';

export default function JobCreatorPage() {
  return (
    <main className="container mx-auto px-4 pt-6">
      <div className="flex flex-row gap-x-6">
        <JobInputPanel />
        <EditorPanel />
      </div>
    </main>
  );
}
