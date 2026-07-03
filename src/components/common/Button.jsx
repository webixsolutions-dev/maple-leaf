import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  to, 
  variant = 'primary', 
  className = '',
  icon: Icon,
  onClick,
  size = 'default'
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300';
  
  const sizeStyles = {
    default: 'px-8 py-3.5 text-base',
    small: 'px-5 py-2 text-sm',
    large: 'px-10 py-4 text-lg',
  };

  const variants = {
    primary: 'bg-pink-600 text-white hover:bg-pink-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white',
    white: 'bg-white text-pink-600 hover:bg-gray-50 shadow-lg hover:shadow-xl',
    green: 'bg-green-700 text-white hover:bg-green-800 shadow-lg hover:shadow-xl',
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedStyles}>
        {children}
        {Icon && <Icon className="ml-2 text-sm group-hover:translate-x-1 transition-transform" />}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
      {Icon && <Icon className="ml-2 text-sm" />}
    </button>
  );
};

export default Button;