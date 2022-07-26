import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';
import { useMutation } from '@apollo/client';
import { DELETE_POST, POSTS } from 'graphql/Post';

import DeleteIcon from 'components/UI/DeleteIcon';

interface ItemBarDeleteProps {
  children?: string;
  itemId: string;
}

const ItemLikeContainer = styled.div`
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

const ItemBarDelete: React.FC<
  StyledComponentProps<'div', DefaultTheme, ItemBarDeleteProps, never>
> = ({ itemId }) => {
  const [deletePost] = useMutation(DELETE_POST);

  const onClickLike = () => {
    deletePost({
      variables: {
        postId: itemId,
      },
      onError(err) {
        console.log(err);
      },
      refetchQueries: [POSTS],
    });
  };

  return (
    <ItemLikeContainer
      onClick={() => {
        onClickLike();
      }}
    >
      <DeleteIcon />
    </ItemLikeContainer>
  );
};

export default ItemBarDelete;
