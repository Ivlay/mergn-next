import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

import ItemBarLike from './ItemBarLike';
import ItemBarComment from './ItemBarComment';
import ItemBarDelete from './ItemBarDelete';
import { CURENT_USER } from 'graphql/Post';
import { ApolloQueryResult, useQuery } from '@apollo/client';

interface PostItemBarProps {
  children?: string;
  itemId: string;
  counterLike: number;
  counterComment: number;
  postUsername?: string;
}

const ItemBarStyled = styled.div`
  position: relative;
  display: flex;
  margin-top: 5px;
  gap: 5px;
`;

const PostItemBar: React.FC<StyledComponentProps<'div', DefaultTheme, PostItemBarProps, never>> = ({
  itemId,
  counterLike,
  counterComment,
  postUsername,
}) => {
  const { data, loading } = useQuery(CURENT_USER);
  if (loading) return <div>loading...</div>;

  return (
    <ItemBarStyled>
      <ItemBarLike counterLike={counterLike} itemId={itemId} />
      <ItemBarComment counterComment={counterComment} />
      {data.currentUser.username === postUsername && (
        <ItemBarDelete itemId={itemId} />
      )}
    </ItemBarStyled>
  );
};

export default PostItemBar;
