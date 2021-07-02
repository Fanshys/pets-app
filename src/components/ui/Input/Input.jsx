import './Input.scss';

const Input = ({
  label,
  error,
  register,
  small,
  red,
  className,
  inputClassName,
  ...rest
}) => {
  const classes = ['input'];
  const inputClasses = ['input__field'];

  if (error) classes.push('input--error');
  if (small) classes.push('input--small');
  if (red) classes.push('input--red');
  if (className) classes.push(className);

  if (inputClassName) inputClasses.push(inputClassName);

  return (
    <div className={classes.join(' ')}>
      <div className="input__wrap">
        <input
          className={inputClasses.join(' ')}
          {...rest}
          {...register}
          required
        />
        <label className="input__label">{label}</label>
      </div>

      {error && <div className="input__error">{error}</div>}
    </div>
  );
};

export default Input;
