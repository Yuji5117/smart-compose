type Option = {
  value: string;
  label: string;
};

type SelectType = {
  options: readonly Option[];
  name: string;
  placeholder?: string;
  defaultValue: string;
};

export const Select: React.FC<SelectType> = ({
  options,
  name,
  placeholder,
  defaultValue,
}) => {
  console.log('default', defaultValue);
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      className="rounded-md border border-[#e5e7eb] bg-gray-50 p-2 text-sm"
    >
      {placeholder && (
        <option value="" disabled hidden>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
