import "./styles.scss";

export const AppInput = ({
  className,
  onChange,
  placeholder,
  value,
  label,
  name,
  type = "text",
  disabled = false,
  maxLength,
  minLength,
  pattern,
  required = false,
  autoFocus = false,
  readOnly = false,
  autoComplete = "off",
}: IAppInput) => {
  return (
    <div className={`main-app-input ${className}`}>
      {label && (
        <label
          className={`main-app-input-label`}
          id={`${name}-${label}-label`}
          htmlFor={name}
        >
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type={type}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        required={required}
        autoFocus={autoFocus}
        readOnly={readOnly}
        autoComplete={autoComplete}
        name={name}
        id={name}
        aria-labelledby={label && `${name}-label`}
        aria-describedby={label && `${name}-description`}
      />
    </div>
  );
};

interface IAppInput {
  className: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => any;
  placeholder: string;
  value: string;
  label: string;
  type?: string;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  required?: boolean;
  autoFocus?: boolean;
  readOnly?: boolean;
  autoComplete?: string;
  name?: string;
}
