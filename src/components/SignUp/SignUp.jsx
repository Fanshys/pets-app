import { NavLink } from 'react-router-dom';
import './SignUp.scss';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up__content">
        <SignUpForm />

        <p className="sign-up__help">
          Arleady have an account?{' '}
          <NavLink to="/auth/login" className="sign-up__help-link">
            Log In
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
