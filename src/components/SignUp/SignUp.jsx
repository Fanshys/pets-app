import HelpTextForm from 'components/HelpTextForm/HelpTextForm';
import './SignUp.scss';
import SignUpForm from './SignUpForm/SignUpForm';

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="sign-up__content">
        <SignUpForm />

        <div className="sign-up__help">
          <HelpTextForm
            text="Arleady have an account?"
            link="/auth/login"
            linkText="Log In"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
