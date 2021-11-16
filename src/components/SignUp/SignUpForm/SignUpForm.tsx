import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { userRegister } from 'store/actions/user';

import Button from 'components/ui/Button/Button';
import Input from 'components/ui/Input/Input';
import Form from 'components/ui/Form/Form';
import { nameRules, passwordRules, emailRules } from 'helpers/validation';

interface SignUpSubmitHandlerEvent extends SubmitEvent {
  email: string;
  password: string;
  name: string;
}

const SignUpForm = (): JSX.Element => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitHandler = (e: SignUpSubmitHandlerEvent) => {
    dispatch(userRegister(e.email, e.password, e.name));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        error={errors?.name?.message}
        register={register('name', nameRules)}
        label="Name"
      />

      <Input
        error={errors?.email?.message}
        register={register('email', emailRules)}
        label="Email"
        type="email"
      />

      <Input
        error={errors?.password?.message}
        register={register('password', passwordRules)}
        label="Password"
        type="password"
        className="13212"
      />

      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
