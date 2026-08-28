import { useState } from 'react';

const colorClasses = {
  pink: 'bg-pink-100 border-pink-200 text-pink-400',
  green: 'bg-green-100 border-green-200 text-green-500',
  purple: 'bg-purple-100 border-purple-200 text-purple-500',
  orange: 'bg-amber-100 border-amber-200 text-amber-500',
  blue: 'bg-sky-100 border-sky-200 text-sky-500',
};

const IconPlaceholder = ({
  size = 40,
  shape = 'circle',
  color,
  src,
  alt = '',
  className = '',
}) => {
  const [hasError, setHasError] = useState(false);

  if (src && !hasError) {
    return (
      <img
        src={src}
        alt={alt}
        className={`object-contain flex-shrink-0 ${className}`}
        style={className ? undefined : { width: size, height: size }}
        loading="lazy"
        onError={() => setHasError(true)}
      />
    );
  }

  const colorClass = color ? colorClasses[color] : 'bg-gray-50 border-gray-300 text-gray-400';

  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed text-xs font-medium flex-shrink-0 ${
        shape === 'circle' ? 'rounded-full' : 'rounded-lg'
      } ${colorClass} ${className}`}
      style={className ? undefined : { width: size, height: size }}
      aria-hidden={!alt}
    >
      ?
    </div>
  );
};

export default IconPlaceholder;
