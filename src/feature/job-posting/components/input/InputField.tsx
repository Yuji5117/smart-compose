import { ReactNode } from 'react';

type InputFieldProps = {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
};

export const InputField: React.FC<InputFieldProps> = ({
  label,
  required,
  error,
  children,
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor="" className="text-sm">
        {label}
        {required && <span className="pl-1 text-red-500">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
