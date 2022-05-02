import { NextPage } from 'next';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';

import { POSTS } from 'graphql/Post';

import { PostItem } from 'components/UI';
import CreatePostText from '../../UI/CreatePostTextarea';

interface IPostItem {
  id: string;
  body: string;
}

const StartPageStyleContainer = styled.div`
  max-width: 900px;
  width: 100%;
  height: 100%;
  margin: 50px auto;
  background-color: #525151;
  border-radius: 10px;
`;

const Start: NextPage = () => {
  const { loading, data, refetch } = useQuery(POSTS);
  return (
    <StartPageStyleContainer>
      <CreatePostText refetch={refetch}>Sub</CreatePostText>
      {!loading ? (
        data.posts.map((element: IPostItem) => {
          return (
            <PostItem itemId={element.id} key={element.id}>
              {element.body}
            </PostItem>
          );
        })
      ) : (
        <p>loading</p>
      )}
    </StartPageStyleContainer>
  );
};

export default Start;
