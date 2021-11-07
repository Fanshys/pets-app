import classNames from 'helpers/classNames';
import './Form.scss';

interface FormPropsInterface {
  children?: JSX.Element | Array<JSX.Element>;
  className?: string;
}

const Form = ({
  children,
  className = '',
}: FormPropsInterface): JSX.Element => {
  return (
    <form
      className={classNames({
        form: true,
        [className]: className,
      })}
      noValidate
    >
      {children}
    </form>
  );
};

export default Form;
