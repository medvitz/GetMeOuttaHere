import { useState, useCallback } from 'react';

interface ZipInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export function ZipInput({ value, onChange, disabled }: ZipInputProps) {
  const [error, setError] = useState<string | null>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value.replace(/\D/g, '').slice(0, 5);
      onChange(input);

      if (input.length === 5) {
        setError(null);
      } else if (input.length > 0) {
        setError('Enter a 5-digit zip code');
      } else {
        setError(null);
      }
    },
    [onChange]
  );

  const handleBlur = useCallback(() => {
    if (value.length > 0 && value.length !== 5) {
      setError('Enter a 5-digit zip code');
    }
  }, [value]);

  return (
    <div className="flex flex-col">
      <label
        htmlFor="zip-input"
        className="text-sm font-medium text-[var(--color-warm-700)] mb-1"
      >
        Your Zip Code
      </label>
      <input
        id="zip-input"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={5}
        placeholder="e.g. 10001"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
        className={`
          w-32 px-3 py-2 text-lg font-mono text-center
          border-2 rounded-lg
          bg-white
          transition-colors
          ${error
            ? 'border-red-400 focus:border-red-500'
            : 'border-[var(--color-warm-300)] focus:border-[var(--color-warm-500)]'
          }
          focus:outline-none focus:ring-2 focus:ring-[var(--color-warm-200)]
          disabled:bg-gray-100 disabled:cursor-not-allowed
        `}
      />
      {error && (
        <p className="text-xs text-red-500 mt-1">{error}</p>
      )}
    </div>
  );
}
