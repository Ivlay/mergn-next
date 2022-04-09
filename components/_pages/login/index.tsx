import { NextPage } from 'next';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import { INPUTS } from './constants/index';

import { Button, Input } from 'components/UI';

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

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit = (data: FormInput) => console.log(data);

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
      </FormContainer>
    </div>
  );
};

export default Login;
