import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authLogin } from 'store/actions';

import Button from 'components/ui/Button/Button';
import Input from 'components/ui/Input/Input';
import Form from 'components/ui/Form/Form';
import { validation } from 'helpers/validateErrors';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const onSubmitHandler = () => {
    dispatch(authLogin());
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Input
        error={errors?.name?.message}
        register={register('name', validation.name)}
        label="Name"
      />

      <Input
        error={errors?.email?.message}
        register={register('email', validation.email)}
        label="Email"
        type="email"
      />

      <Input
        error={errors?.password?.message}
        register={register('password', validation.password)}
        label="Password"
        type="password"
      />

      <Button type="submit">Sign Up</Button>
    </Form>
  );
};

export default SignUpForm;
