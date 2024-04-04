function Input({ label, id, textarea, ...rest }) {
  return (
    <div className='input-control'>
      <label htmlFor={id}>{label}</label>
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
