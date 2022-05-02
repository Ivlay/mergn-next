import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';
import { useMutation } from '@apollo/client';

import { CREATE_POST } from 'graphql/Post';

import { Textarea, Header, Button } from 'components/UI';
import { useForm } from 'react-hook-form';
import { TEXTAREA } from './constants';

interface CreatePostTextarea {
  children: string;
  refetch: any;
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
  width: 800px;
  margin-left: 10px;
  margin-bottom: 50px;
`;

const CreatePostArea: React.FC<
  StyledComponentProps<'div', DefaultTheme, CreatePostTextarea, never>
> = ({ children, refetch }) => {
  const [createPost] = useMutation(CREATE_POST);

  const { register, handleSubmit } = useForm<FormTextarea>();

  const onSubmit = (values: FormTextarea) => {
    createPost({
      variables: {
        body: values.body,
      },
      onError(err) {
        console.log(err);
      },
      onCompleted() {
        refetch();
      },
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

export default CreatePostArea;
