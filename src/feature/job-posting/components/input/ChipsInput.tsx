import { useState } from 'react';
import { Chip } from './Chip';
import { Input } from './Input';

type ChipsInputProps = {
  name: string;
  value?: string;
  placeholder: string;
};

export const ChipsInput = ({ name, value, placeholder }: ChipsInputProps) => {
  const [chips, setChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [isComposing, setIsComposing] = useState<boolean>(false);

  const handleOnChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (isComposing || e.key !== 'Enter') return;
    e.preventDefault();

    const value = inputValue.trim();
    if (!value) return;

    setChips((prev) => (prev.includes(value) ? prev : [...prev, value]));
    setInputValue('');
  };

  const handleOnRermove = (label: string) => {
    setChips((prev) => prev.filter((v) => v !== label));
  };

  return (
    <>
      <Input
        value={inputValue}
        placeholder={placeholder}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
      <div className="flex flex-row gap-1.5">
        {chips.map((chip) => (
          <div key={chip}>
            <Chip label={chip} onRemove={() => handleOnRermove(chip)} />
            <input type="hidden" name={`${name}[]`} value={chip} />
          </div>
        ))}
      </div>
    </>
  );
};
