import Button from '../_ui/Button/Button';

import './Auth.scss';

const Auth = (): JSX.Element => {
  return (
    <div className="auth">
      <div className="auth__content">
        <h1 className="auth__title">
          Pets <b>App</b>
        </h1>
        <p className="auth__desc">Find your new fluffy friend</p>
        <div className="auth__buttons">
          <Button to="/auth/signup">Sign Up</Button>
          <Button dark to="/auth/login">
            Log In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
