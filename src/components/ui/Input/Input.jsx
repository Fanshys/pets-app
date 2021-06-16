import './Input.scss';

const Input = ({ placeholder, error, register, value, ...rest }) => {
  const classes = ['input'];
  const labelClasses = ['input__label'];

  error && classes.push('input--error');

  value && labelClasses.push('input__label--hide');

  return (
    <div className={classes.join(' ')}>
      <div className="input__wrap">
        <input className="input__field" {...rest} {...register} />
        <label className={labelClasses.join(' ')}>{placeholder}</label>
      </div>

      {error && <div className="input__error">{error}</div>}
    </div>
  );
};

export default Input;
