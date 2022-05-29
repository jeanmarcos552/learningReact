interface InputProp {
  name: string;
  label: string;
  type?: 'text' | 'number';
  defaulValue: string | number;
  disabled?: boolean;
  handleChange?: any;
  className?: string;
}
export function Input({
  label,
  name,
  type,
  defaulValue,
  disabled,
  handleChange,
  className,
}: InputProp) {
  return (
    <label htmlFor={name} className="flex flex-col">
      <span className="mb-4 text-base">{label}</span>
      <input
        type={type || 'text'}
        name={name}
        defaultValue={defaulValue}
        className={`w-full p-2 border-purple-900 rounded-lg border text-purple-900 focus:outline-none text-base ${
          disabled ? 'bg-gray-200 cursor-not-allowed' : 'focus:bg-gray-100'
        } ${className}`}
        readOnly={disabled}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
}
