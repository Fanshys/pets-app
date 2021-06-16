import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authLogin } from '../../../store/actions';

import './LoginForm.scss';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import { getErrorText, validation } from '../../../helpers/validateErrors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitHandler = () => {
    dispatch(authLogin());
  };

  return (
    <form className="form login-form" onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        error={getErrorText(errors.login, 'login')}
        register={register('login', validation.login.rules)}
        placeholder="Login or Email"
        value={getValues('login')}
      />

      <Input
        error={getErrorText(errors.pass, 'password')}
        register={register('pass', validation.password.rules)}
        placeholder="Password"
        value={getValues('pass')}
        type="password"
      />

      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
