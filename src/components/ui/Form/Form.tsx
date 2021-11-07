import classNames from 'helpers/classNames';
import './Form.scss';

interface FormPropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
  className?: string;
}

const Form = ({
  children,
  className = '',
  ...rest
}: FormPropsInterface): JSX.Element => {
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
