'use client';

import { useActionState } from 'react';

import {
  ActionState,
  generateJobPostiongAction,
} from '@/feature/job-posting/actions/generateJobPostiong';
import { EditorPanel } from '@/feature/job-posting/components/editer/EditorPanel';
import { JobInputPanel } from '@/feature/job-posting/components/input/JobInputPanel';

const INITIAL: ActionState = {
  values: {},
  output: '',
  errors: undefined,
  message: undefined,
};

export default function JobCreatorPage() {
  const [state, formAction] = useActionState<ActionState, FormData>(
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
