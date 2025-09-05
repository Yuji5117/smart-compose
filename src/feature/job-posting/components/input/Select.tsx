type Option = {
  value: string;
  label: string;
};

type SelectType = {
  options: readonly Option[];
  placeholder?: string;
  defaultValue?: string;
};

export const Select: React.FC<SelectType> = ({
  options,
  placeholder,
  defaultValue,
}) => {
  return (
    <select
      defaultValue={defaultValue ?? ''}
      className="rounded-md border border-[#e5e7eb] bg-gray-50 p-2 text-sm"
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
