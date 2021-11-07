import classNames from 'helpers/classNames';
import './Input.scss';

interface InputPropsInterface {
  label: string | JSX.Element | Array<JSX.Element>;
  error?: string;
  register?: object;
  small?: boolean;
  red?: boolean;
  className?: string;
  inputClassName: string;
}

const Input = ({
  label,
  error,
  register,
  small,
  red,
  className = '',
  inputClassName,
  ...rest
}: InputPropsInterface): JSX.Element => {
  return (
    <div
      className={classNames({
        input: true,
        'input--error': error,
        'input--small': small,
        'input--red': red,
        [className]: className,
      })}
    >
      <div className="input__wrap">
        <input
          className={classNames({
            input__field: true,
            [inputClassName]: inputClassName,
          })}
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
