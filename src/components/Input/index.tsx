import { useState } from 'react';

import { InputHandles } from './types';

const Input: React.FC<InputHandles> = ({
  label,
  way,
  textarea = false,
  rows,
  ...rest
}) => {
  const [focus, onFocus] = useState(false);

  return (
    <div className={`main ${focus ? 'is-focus' : ''}`}>
      <label htmlFor={way}>
        {label}
        {! textarea ? (
          <input
            {...rest}
            onFocus={() => onFocus(true)}
            onBlur={() => onFocus(false)}
          />
        ) : (
          <textarea
            {...rest}
            rows={rows}
            onFocus={() => onFocus(true)}
            onBlur={() => onFocus(false)}
          />
        )}
      </label>
    </div>
  );
};

export default Input;
