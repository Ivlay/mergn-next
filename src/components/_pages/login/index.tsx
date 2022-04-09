import { NextPage } from 'next';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import { LOGIN } from 'graphql/Post';
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

import { Button, Input } from 'src/components/UI';

import { INPUTS } from './constants/index';

interface IFormInput {
  login: string;
  password: string;
}

const FormContainer = styled.form `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
`

const Login: NextPage = () => {
  const [getPosts, { data }] = useMutation(LOGIN);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const loadPost = () => {
    getPosts();
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
              name={itemInput.name}
              type={itemInput.type}
              {...register(itemInput.name, itemInput.rules)}
            />
          );
        })}
        <Button type="submit">Оправить</Button>
      </FormContainer>
    </div>
  );
};

export default Login;
