'use client';

import { generateJobPostiongAction } from '@/feature/job-posting/actions/generateJobPostiong';
import { EditorPanel } from '@/feature/job-posting/components/editer/EditorPanel';
import { JobInputPanel } from '@/feature/job-posting/components/input/JobInputPanel';
import { JobFormInput } from '@/feature/job-posting/schemas/schemas';
import { useActionState } from 'react';

const INITIAL: JobFormInput = {
  jobType: '',
  keywords: '',
  salary: '',
  location: '',
  tone: '',
};

export default function JobCreatorPage() {
  const [state, formAction] = useActionState(
    generateJobPostiongAction,
    INITIAL
  );
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="flex flex-row items-start gap-x-6">
        <JobInputPanel action={formAction} values={state.values} />
        <EditorPanel output={state.output} />
      </div>
    </main>
  );
}
