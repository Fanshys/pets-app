import classNames from 'helpers/classNames';
import { ReactInputProps } from 'helpers/ReactPropTypes';
import { ReactNode } from 'react';
import './Input.scss';

interface InputPropsInterface extends ReactInputProps {
  label?: ReactNode;
  error?: string;
  register?: object;
  small?: boolean;
  red?: boolean;
  inputClassName?: string;
}

const Input = ({
  label,
  error,
  register,
  small,
  red,
  className = '',
  ...rest
}: InputPropsInterface): JSX.Element => {
  const classes = classNames({
    input: true,
    'input--error': error,
    'input--small': small,
    'input--red': red,
    [className]: className,
  });

  return (
    <div className={classes}>
      <div className="input__wrap">
        <input
          className="input__field"
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

export default Input;
