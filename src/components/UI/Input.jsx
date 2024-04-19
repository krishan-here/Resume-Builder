import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import { useState } from 'react';

function Input({
  label,
  id,
  textarea,
  aiInput = false,
  show,
  required,
  ...rest
}) {
  const [aiInputShow, setAiInputShow] = useState(show);

  function handleAiInputToggle() {
    setAiInputShow((currentToggle) => !currentToggle);
  }
  return (
    <div className='input-control'>
      <div className='label-container'>
        <label
          htmlFor={id}
          className={aiInput ? 'ai-label' : ''}>
          {required && <span className='danger-text'>*</span>}
          {label}
        </label>
        {aiInput && (
          <div className='toggle'>
            {aiInputShow ? (
              <ToggleOnIcon
                className='select'
                onClick={handleAiInputToggle}
              />
            ) : (
              <ToggleOffIcon
                className='remove'
                onClick={handleAiInputToggle}
              />
            )}
          </div>
        )}
      </div>
      {textarea && (
        <textarea
          id={id}
          type='text'
          className={aiInput ? 'ai-input' : ''}
          {...rest}></textarea>
      )}
      {!textarea && (
        <input
          id={id}
          type='text'
          {...rest}
        />
      )}
    </div>
  );
}

export default Input;
