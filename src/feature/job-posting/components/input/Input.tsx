type InputProps = {
  type?: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({
  type = 'text',
  name,
  defaultValue,
  placeholder,
}) => {
  return (
    <input
      type={type}
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="rounded-md border border-[#e5e7eb] bg-gray-50 p-2 placeholder:text-sm"
    />
  );
};
