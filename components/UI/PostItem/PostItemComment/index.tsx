import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';
import { useMutation } from '@apollo/client';
import { CREATE_COMMENT } from 'graphql/Post';
import { useForm } from 'react-hook-form';

import InputComment from 'components/UI/InputComment';
import Button from 'components/UI/Button';
import { INPUT } from './constants';

interface PostItemCommentProps {
  itemId: string;
  comments: any;
}

interface FormInput {
  body: string;
}

interface IPostItem {
  id: string;
  body: string;
}

const CommentsStyleContainer = styled.div`
  border: 1px #fff solid;
  margin-top: 10px;
`;

const CommentsItemStyled = styled.div`
  color: ${(props) => props.theme.color};
  margin: 5px 0;
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
  align-items: center;
`;
const PostItemComment: React.FC<
  StyledComponentProps<'div', DefaultTheme, PostItemCommentProps, never>
> = ({ itemId, comments }) => {
  const { register, handleSubmit } = useForm<FormInput>();

  const [createComment] = useMutation(CREATE_COMMENT);

  const onSubmit = (values: FormInput) => {
    createComment({
      variables: {
        body: values.body,
        postId: itemId,
      },
      onError(err) {
        console.log(err);
      },
    });
  };

  return (
    <CommentsStyleContainer>
      {comments
        ? comments.map((item: IPostItem) => {
            return (
              <CommentsItemStyled key={item.id}>
                <CommentUsernameStyled>LKAMA</CommentUsernameStyled>
                <CommentMessageStyled>{item.body}</CommentMessageStyled>
              </CommentsItemStyled>
            );
          })
        : console.log(comments)}
      <FormStyled onSubmit={handleSubmit(onSubmit)}>
        <InputComment
          placeholder={INPUT.placeholder}
          key={INPUT.name}
          type={INPUT.type}
          {...register(INPUT.name, INPUT.rules)}
        />
        <Button type="submit" style={{ margin: '0 5px' }}>
          Sub!
        </Button>
      </FormStyled>
    </CommentsStyleContainer>
  );
};

export default PostItemComment;
