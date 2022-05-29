interface ButtonProp {
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  children: React.ReactNode;
  onClick?: any;
}
export function Button({
  children,
  color = 'gray',
  className,
  onClick,
}: ButtonProp) {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`
      bg-gradient-to-r from-${color}-700 to-${color}-500
      px-4 py-2 rounded-md text-gray-100 text-base ${className}`}
    >
      {children}
    </button>
  );
}
