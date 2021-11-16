import classNames from 'helpers/classNames';
import './Form.scss';

const Form = ({
  children,
  className = '',
  ...rest
}: React.FormHTMLAttributes<HTMLFormElement>): JSX.Element => {
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
