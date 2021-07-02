import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authLogin } from '../../../store/actions';

import './LoginForm.scss';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Input/Input';
import Form from '../../ui/Form/Form';
import { validation } from '../../../helpers/validateErrors';

const LoginForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitHandler = (e) => {
    dispatch(authLogin());
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        error={errors?.email?.message}
        register={register('email', validation.email)}
        type="email"
        label="Email"
      />

      <Input
        error={errors?.password?.message}
        register={register('password', validation.password)}
        label="Password"
        type="password"
      />

      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
