import './Form.scss';

const Form = ({ children, ...rest }) => {
  return (
    <form className="form" noValidate {...rest}>
      {children}
    </form>
  );
};

export default Form;
