import { InputHandles } from './types';

const Input: React.FC<InputHandles> = ({
  label,
  type,
  placeholder,
  way,
  input,
}) => (
  <div className="main">
    <label htmlFor={way}>
      {label}
      <input type={type} className={input} placeholder={placeholder} />
    </label>
  </div>
);

export default Input;
