import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userLogin } from 'store/actions/user';

import './LoginForm.scss';
import Button from 'components/_ui/Button/Button';
import Input from 'components/_ui/Input/Input';
import Form from 'components/_ui/Form/Form';
import { passwordRules, emailRules } from 'helpers/validation';

interface LoginSubmitHandlerEvent extends SubmitEvent {
  email: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitHandler = (e: LoginSubmitHandlerEvent) => {
    dispatch(userLogin(e.email, e.password));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        error={errors?.email?.message}
        register={register('email', emailRules)}
        name="email"
        type="email"
        label="Email"
      />

      <Input
        error={errors?.password?.message}
        register={register('password', passwordRules)}
        name="password"
        label="Password"
        type="password"
      />

      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
