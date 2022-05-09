import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';
import { useQuery } from '@apollo/client';

import PostItemBar from './PostItemBar';
import { POST } from 'graphql/Post';
import PostItemComment from './PostItemComment';

interface PostItemProps {
  children?: string;
  itemId: string;
  counterLike?: number;
}

const PostItemContainer = styled.div`
  color: ${(props) => props.theme.color};
  padding-bottom: 10px;
`;

const ItemContainerStyled = styled.div`
  margin: 25px 0;
`;

const ItemStyled = styled.div`
  border-radius: 10px;
  height: 100px;
  background-color: ${(props) => props.theme.backgroundColor};
  padding: 10px;
`;

const ItemUsernameStyled = styled.div`
  color: ${(props) => props.theme.color};
  margin-top: 5px;
`;

const PostItem: React.FC<StyledComponentProps<'div', DefaultTheme, PostItemProps, never>> = ({
  children,
  itemId,
}) => {
  const { data, loading } = useQuery(POST, {
    variables: {
      postId: itemId,
    },
  });
  if (loading) return <div>loading...</div>;

  return (
    <PostItemContainer>
      <ItemContainerStyled>
        <ItemStyled>{children}</ItemStyled>
        <ItemUsernameStyled>{data.post.username}</ItemUsernameStyled>
        <PostItemBar
          counterComment={data.post.commentsCount}
          counterLike={data.post.likesCount}
          itemId={itemId}
          postUsername={data.post.username}
        />
        <PostItemComment itemId={itemId} />
      </ItemContainerStyled>
    </PostItemContainer>
  );
};

export default PostItem;
