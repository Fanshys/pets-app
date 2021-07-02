import { NavLink } from 'react-router-dom';
import './Login.scss';
import LoginForm from './LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login__content">
        <LoginForm />

        <p className="login__help">
          Don't have an account yet?{' '}
          <NavLink to="/auth/signup" className="login__help-link">
            Sign Up
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
