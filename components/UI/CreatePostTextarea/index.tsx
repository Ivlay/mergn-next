import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';
import { useMutation } from '@apollo/client';

import { CREATE_POST, POSTS } from 'graphql/Post';

import { Textarea, Header, Button } from 'components/UI';
import { useForm } from 'react-hook-form';
import { TEXTAREA } from './constants';

interface CreatePostTextarea {
  children?: string;
}

interface FormTextarea {
  body: string;
}

const StyledButton = styled(Button)`
  font-size: 24px;
  padding: 5px 15px;
  width: 200px;
`;

const ContainerItem = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column; ;
`;

const CreatePostTextarea: React.FC<
  StyledComponentProps<'div', DefaultTheme, CreatePostTextarea, never>
> = ({ children }) => {
  const [createPost] = useMutation(CREATE_POST);

  const { register, handleSubmit, setValue } = useForm<FormTextarea>();

  const onSubmit = (values: FormTextarea) => {
    createPost({
      variables: {
        body: values.body,
      },
      onError(err) {
        console.log(err);
      },
      onCompleted() {
        setValue('body', '');
      },
      refetchQueries: [POSTS],
    });
  };

  return (
    <ContainerItem onSubmit={handleSubmit(onSubmit)}>
      <Header>NEWS</Header>
      <Textarea
        placeholder={TEXTAREA.placeholder}
        key={TEXTAREA.name}
        {...register(TEXTAREA.name, TEXTAREA.rules)}
      />
      <StyledButton type="submit">{children}</StyledButton>
    </ContainerItem>
  );
};

export default CreatePostTextarea;
