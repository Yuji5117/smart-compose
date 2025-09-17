import React from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  type = 'text',
  className = '',
  ...props
}) => {
  return (
    <input
      type={type}
      {...props}
      className={`rounded-md border border-[#e5e7eb] bg-gray-50 p-2 placeholder:text-sm ${className}`}
    />
  );
};
