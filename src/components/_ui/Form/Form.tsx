import classNames from 'helpers/classNames';
import { ReactFormProps } from 'helpers/ReactPropTypes';
import './Form.scss';

const Form = ({
  children,
  className = '',
  ...rest
}: ReactFormProps): JSX.Element => {
  const classes = classNames({
    form: true,
    [className]: className,
  });

  return (
    <form className={classes} noValidate {...rest}>
      {children}
    </form>
  );
};

export default Form;
