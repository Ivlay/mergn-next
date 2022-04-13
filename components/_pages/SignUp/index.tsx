import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import { INPUTS } from './constants/index';

import { SIGN_UP } from 'graphql/Post';

import { Button, Input } from 'components/UI';

interface FormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const FormContainer = styled.form`
  margin: 30px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: ${(props) => props.theme.errorText};
  font-size: 10px;
`;

const SignUp: NextPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormInput>();

  const [signup, { data, loading, error }] = useMutation(SIGN_UP);

  const onSubmit = (values: FormInput) => {
    if (values.confirmPassword === values.password) {
      signup({
        variables: {
          email: values.email,
          username: values.username,
          password: values.password,
          confirmPassword: values.confirmPassword,
        },
        onError(err) {
          console.log(err);
        },
      });
    } else {
      setError('confirmPassword', { type: 'required', message: 'Passwords do not match' });
    }
  };

  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        {INPUTS.map((itemInput) => {
          return (
            <Input
              helperText={errors?.[itemInput.name]?.message}
              placeholder={itemInput.placeholder}
              key={itemInput.name}
              type={itemInput.type}
              {...register(itemInput.name, itemInput.rules)}
            />
          );
        })}
        <Button type="submit">Submit</Button>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </FormContainer>
    </div>
  );
};

export default SignUp;
