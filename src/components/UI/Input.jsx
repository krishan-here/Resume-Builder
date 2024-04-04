function Input({ label, id, ...rest }) {
  return (
    <div className='input-grp'>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type='text'
        {...rest}
      />
    </div>
  );
}

export default Input;
