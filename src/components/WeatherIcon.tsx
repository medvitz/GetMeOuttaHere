interface WeatherIconProps {
  cloudCover: number;
  size?: 'sm' | 'md' | 'lg';
}

export function WeatherIcon({ cloudCover, size = 'md' }: WeatherIconProps) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  // Determine icon based on cloud cover percentage
  // 0-25%: sunny, 25-75%: partly cloudy, 75-100%: overcast
  const getIcon = (): string => {
    if (cloudCover < 25) return '☀️';
    if (cloudCover < 75) return '⛅';
    return '☁️';
  };

  const getLabel = (): string => {
    if (cloudCover < 25) return 'Sunny';
    if (cloudCover < 75) return 'Partly cloudy';
    return 'Overcast';
  };

  return (
    <span
      role="img"
      aria-label={getLabel()}
      title={`${getLabel()} (${cloudCover}% cloud cover)`}
      className={sizeClasses[size]}
    >
      {getIcon()}
    </span>
  );
}
