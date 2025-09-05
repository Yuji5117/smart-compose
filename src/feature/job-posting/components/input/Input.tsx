type InputProps = {
  type?: string;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({ type = 'text', placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="bg rounded-md border border-[#e5e7eb] bg-gray-50 p-2 placeholder:text-sm"
    />
  );
};
