function Input({ label, id, textarea, required, ...rest }) {
  return (
    <div className='input-control'>
      <label htmlFor={id}>
        {required && <span className='danger-text'>*</span>}
        {label}
      </label>
      {textarea && (
        <textarea
          id={id}
          type='text'
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
