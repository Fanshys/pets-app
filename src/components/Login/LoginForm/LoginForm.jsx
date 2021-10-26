import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authLogin } from 'store/actionCreators/userLogin';

import './LoginForm.scss';
import Button from 'components/ui/Button/Button';
import Input from 'components/ui/Input/Input';
import Form from 'components/ui/Form/Form';
import { passwordRules, emailRules } from 'helpers/validation';

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
        register={register('email', emailRules)}
        type="email"
        label="Email"
      />

      <Input
        error={errors?.password?.message}
        register={register('password', passwordRules)}
        label="Password"
        type="password"
      />

      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
