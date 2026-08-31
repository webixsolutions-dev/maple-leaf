import IconPlaceholder from './IconPlaceholder';

const ImagePlaceholder = ({
  aspectRatio = '16/10',
  label = 'Image Placeholder',
  className = '',
  rounded = 'rounded-2xl',
}) => (
  <div
    className={`flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-100 text-gray-400 ${rounded} ${className}`}
    style={{ aspectRatio }}
  >
    <IconPlaceholder size={32} shape="square" className="mb-2" />
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default ImagePlaceholder;
