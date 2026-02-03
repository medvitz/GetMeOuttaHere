interface DriveTimeSliderProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export function DriveTimeSlider({ value, onChange, disabled }: DriveTimeSliderProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(parseFloat(e.target.value));
  };

  const formatTime = (hours: number): string => {
    if (hours === Math.floor(hours)) {
      return `${hours} hour${hours !== 1 ? 's' : ''}`;
    }
    return `${hours} hours`;
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor="drive-time-slider"
        className="text-sm font-medium text-[var(--color-warm-700)] mb-1"
      >
        Max Drive Time
      </label>
      <div className="flex items-center gap-3">
        <input
          id="drive-time-slider"
          type="range"
          min={2}
          max={12}
          step={0.5}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={`
            w-48 h-2 rounded-lg appearance-none cursor-pointer slider-thumb
            bg-[var(--color-warm-200)]
            accent-[var(--color-warm-500)]
            disabled:cursor-not-allowed disabled:opacity-50
          `}
        />
        <span className="text-lg font-semibold text-[var(--color-warm-800)] min-w-[100px]">
          {formatTime(value)}
        </span>
      </div>
      <div className="flex justify-between text-xs text-[var(--color-warm-500)] mt-1 w-48">
        <span>2 hrs</span>
        <span>12 hrs</span>
      </div>
    </div>
  );
}
