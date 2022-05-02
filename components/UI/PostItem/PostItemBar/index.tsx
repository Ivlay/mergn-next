import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

import ItemBarLike from './ItemBarLike';
import ItemBarComment from './ItemBarComment';

interface PostItemBarProps {
  children?: string;
  itemId: string;
  counterLike: number;
}

const ItemBarStyled = styled.div`
  display: flex;
  margin-top: 5px;
  gap: 5px;
`;

const PostItemBar: React.FC<StyledComponentProps<'div', DefaultTheme, PostItemBarProps, never>> = ({
  itemId,
  counterLike,
}) => {
  return (
    <ItemBarStyled>
      <ItemBarLike counterLike={counterLike} itemId={itemId} />
      <ItemBarComment />
    </ItemBarStyled>
  );
};

export default PostItemBar;
