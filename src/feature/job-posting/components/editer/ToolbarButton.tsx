import { ReactNode } from 'react';

type ToolbarButtProps = {
  onClick: () => void;
  children: ReactNode;
  icon?: ReactNode;
};

export const ToolbarButton: React.FC<ToolbarButtProps> = ({
  onClick,
  children,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex cursor-pointer flex-row items-center gap-x-1.5 text-sm text-gray-500 hover:text-gray-500/60"
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};
