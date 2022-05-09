import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useMutation } from '@apollo/client';
import Router from 'next/router';
import { useEffect } from 'react';

import { INPUTS } from './constants/index';
import { START_PAGE } from 'constants/routes';

import { SIGN_IN } from 'graphql/Post';

import { Button, Input } from 'components/UI';

interface FormInput {
  username: string;
  password: string;
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

const InpunContainerStyled = styled.div`
  max-width: 200px;
  min-height: 80px;
  margin-bottom: 30px;
`;

const SignIn: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const [login, { data, error }] = useMutation(SIGN_IN);
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

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.login.access_token);
      localStorage.setItem('username', data.login.user.username);
      Router.replace(START_PAGE);
    }
  }, [data]);

  return (
    <div>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <InpunContainerStyled>
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
        </InpunContainerStyled>
        <Button type="submit">Оправить</Button>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </FormContainer>
    </div>
  );
};

export default SignIn;
