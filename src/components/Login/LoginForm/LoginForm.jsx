import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authLogin } from '../../../store/actions';

import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmitHandler = () => {
    dispatch(authLogin());
  };

  return (
    <form
      action=""
      className="form login-form"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <Input
        error={errors.login && 'Login is required'}
        register={register('login', { required: true })}
      />

      <Button type="submit">Log In</Button>
    </form>
  );
};

export default LoginForm;
