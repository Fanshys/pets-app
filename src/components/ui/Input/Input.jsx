import PropTypes from 'prop-types';
import classNames from 'helpers/classNames';
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
  const classes = classNames({
    input: true,
    'input--error': error,
    'input--small': small,
    'input--red': red,
    [className]: className,
  });
  const inputClasses = classNames({
    input__field: true,
    [inputClassName]: inputClassName,
  });

  return (
    <div className={classes}>
      <div className="input__wrap">
        <input
          className={inputClasses}
          placeholder=" "
          {...rest}
          {...register}
          required
        />
        <label className="input__label">{label}</label>
      </div>

      <div className="input__error">{error}</div>
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  small: PropTypes.bool,
  red: PropTypes.bool,
  inputClassName: PropTypes.string,

  // register object from useForm (react-hook-form)
  register: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ref: PropTypes.func.isRequired,
  }),
};

export default Input;
