import { useState } from 'react';
import ImagePlaceholder from '../ImagePlaceholder';

const ServicePhoto = ({
  src,
  alt,
  label,
  aspectRatio = '16/10',
  className = '',
  rounded = 'rounded-2xl',
}) => {
  const sources = Array.isArray(src) ? src.filter(Boolean) : src ? [src] : [];
  const [sourceIndex, setSourceIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const currentSrc = sources[sourceIndex];

  if (!currentSrc) {
    return (
      <ImagePlaceholder
        aspectRatio={aspectRatio}
        label={label}
        rounded={rounded}
        className={className}
      />
    );
  }

  return (
    <div className={`relative ${className}`} style={{ aspectRatio }}>
      {!loaded && (
        <ImagePlaceholder
          aspectRatio={aspectRatio}
          label={label}
          rounded={rounded}
          className="absolute inset-0 w-full h-full"
        />
      )}
      <img
        key={currentSrc}
        src={currentSrc}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover ${rounded} ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(false);
          setSourceIndex((index) => index + 1);
        }}
      />
    </div>
  );
};

export default ServicePhoto;
