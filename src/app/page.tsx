import { JobInputPanel } from '@/feature/job-posting/components/input/JobInputPanel';

export default function JobCreatorPage() {
  return (
    <main className="container mx-auto px-4">
      <div className="grid">
        <JobInputPanel />
      </div>
    </main>
  );
}
