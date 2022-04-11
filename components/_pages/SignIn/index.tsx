import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';

import { INPUTS } from './constants/index';

import { Button, Input } from 'components/UI';
import { SIGN_IN } from 'graphql/Post';

interface FormInput {
  username: string;
  password: string;
}

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: ${(props) => props.theme.errorText};
  font-size: 10px;
`;

const SignIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const [login, { data, loading, error }] = useMutation(SIGN_IN);

  const onSubmit = (values: FormInput) => {
    login({
      variables: {
        username: values.username,
        password: values.password,
      },
      onError(err) {
        console.log(err);
      },
    });
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
        <Button type="submit">Оправить</Button>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </FormContainer>

    </div>
  );
};

export default SignIn;
