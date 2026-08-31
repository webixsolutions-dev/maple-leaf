import { useState } from 'react';

const colorClasses = {
  pink: 'bg-pink-400 border-pink-400 text-white',
  green: 'bg-green-500 border-green-500 text-white',
  purple: 'bg-purple-500 border-purple-500 text-white',
  orange: 'bg-orange-400 border-orange-400 text-white',
  blue: 'bg-sky-500 border-sky-500 text-white',
};

const IconPlaceholder = ({
  size = 40,
  shape = 'circle',
  color,
  src,
  alt = '',
  className = '',
}) => {
  const sources = Array.isArray(src) ? src.filter(Boolean) : src ? [src] : [];
  const [sourceIndex, setSourceIndex] = useState(0);
  const currentSrc = sources[sourceIndex];

  if (currentSrc) {
    return (
      <img
        src={currentSrc}
        alt={alt}
        className={`object-contain flex-shrink-0 ${className}`}
        style={className ? undefined : { width: size, height: size }}
        loading="lazy"
        onError={() => setSourceIndex((index) => index + 1)}
      />
    );
  }

  const colorClass = color
    ? colorClasses[color]
    : 'bg-gray-50 border-gray-300 text-gray-400';
  const borderStyle = color ? 'border-2' : 'border-2 border-dashed';

  return (
    <div
      className={`flex items-center justify-center ${borderStyle} text-xs font-medium flex-shrink-0 ${
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
