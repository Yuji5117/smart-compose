type ChipProps = {
  label: string;
  onRemove: (label: string) => void;
};

export const Chip: React.FC<ChipProps> = ({ label, onRemove }) => {
  return (
    <span className="group inline-flex rounded-full bg-gray-100 px-2 py-1 text-xs shadow-sm">
      <span>{label}</span>
      <button
        onClick={(e) => {
          e.preventDefault();
          onRemove(label);
        }}
        className="hidden cursor-pointer pl-1 group-hover:inline-flex"
      >
        ✖️
      </button>
    </span>
  );
};
