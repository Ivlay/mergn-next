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
  margin: 10px;
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
  const { data } = useQuery(POST, {
    variables: {
      postId: itemId,
    },
  });

  return (
    <PostItemContainer>
      <ItemContainerStyled>
        <ItemStyled>{children}</ItemStyled>
        <ItemUsernameStyled>{data ? data.post.username : null}</ItemUsernameStyled>
        <PostItemBar counterLike={data ? data.post.likesCount : 0} itemId={itemId} />
        <PostItemComment comments={data ? data.comments : []} itemId={itemId} />
      </ItemContainerStyled>
    </PostItemContainer>
  );
};

export default PostItem;
