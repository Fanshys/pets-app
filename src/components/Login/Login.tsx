import HelpTextForm from 'components/HelpTextForm/HelpTextForm';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = (): JSX.Element => {
  return (
    <div className="login">
      <div className="login__content">
        <LoginForm />

        <div className="login__help">
          <HelpTextForm
            text="Don't have an account yet?"
            link="/auth/signup"
            linkText="Sign Up"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
