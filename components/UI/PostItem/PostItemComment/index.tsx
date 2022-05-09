import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_COMMENT, POST } from 'graphql/Post';
import { useForm } from 'react-hook-form';

import Input from 'components/UI/Input';
import Button from 'components/UI/Button';
import { INPUT } from './constants';

interface PostItemCommentProps {
  itemId: string;
}

interface FormInput {
  body: string;
}

interface IPostItem {
  id: string;
  body: string;
  username: string;
}

const CommentsStyleContainer = styled.div`
  margin-top: 10px;
`;

const CommentsItemStyled = styled.div`
  color: ${(props) => props.theme.color};
  margin: 5px 0;
  border: 1px solid #767676;
  border-radius: 10px;
  padding: 5px;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
`;
const CommentUsernameStyled = styled.div`
  color: ${(props) => props.theme.color};
  margin-right: 5px;
  ::after {
    content: ':';
    color: ${(props) => props.theme.color};
  }
`;
const CommentMessageStyled = styled.div`
  color: ${(props) => props.theme.color};
`;

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
`;
const PostItemComment: React.FC<
  StyledComponentProps<'div', DefaultTheme, PostItemCommentProps, never>
> = ({ itemId }) => {
  const { register, handleSubmit, setValue } = useForm<FormInput>();

  const [AddCommnet] = useMutation(CREATE_COMMENT);
  const { data, loading } = useQuery(POST, {
    variables: {
      postId: itemId,
    },
  });

  const onSubmit = (values: FormInput) => {
    AddCommnet({
      variables: {
        body: values.body,
        postId: itemId,
      },
      onError(err) {
        console.log(err.message);
      },
      onCompleted() {
        setValue('body', '');
      },
      refetchQueries: [POST],
    });
  };
  if (loading) return <div>loading...</div>;
  return (
    <CommentsStyleContainer>
      {data.post.comments.map((item: IPostItem) => {
        return (
          <CommentsItemStyled key={item.id}>
            <CommentUsernameStyled>{item.username}</CommentUsernameStyled>
            <CommentMessageStyled>{item.body}</CommentMessageStyled>
          </CommentsItemStyled>
        );
      })}
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={INPUT.placeholder}
          key={INPUT.name}
          type={INPUT.type}
          {...register(INPUT.name, INPUT.rules)}
        />
        <Button type="submit" style={{ margin: '0 5px', padding: '5px 20px' }}>
          Sub!
        </Button>
      </FormStyled>
    </CommentsStyleContainer>
  );
};

export default PostItemComment;
