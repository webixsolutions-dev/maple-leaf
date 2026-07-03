const SectionHeader = ({ tag, title, subtitle, centered = true, className = '' }) => {
  return (
    <div className={`${centered ? 'text-center' : ''} max-w-3xl mx-auto mb-12 ${className}`}>
      {tag && (
        <span className="text-green-700 font-semibold text-sm uppercase tracking-wider bg-green-50 px-4 py-1.5 rounded-full inline-block">
          {tag}
        </span>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 font-serif">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-600 mt-3 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeader;