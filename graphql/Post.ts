import { gql } from '@apollo/client';

export interface IPost {
  body: string;
  commentCount: number;
  comments: Pick<IPost, 'body' | 'createdAt' | 'id' | 'userName'>[];
  createdAt: string;
  id: string;
  likeCount: number;
  likes: Pick<IPost, 'userName' | 'createdAt' | 'id'>[];
  userName: string;
}

export const LOGIN = gql`
  mutation {
    login(loginUserInput: { username: "Ivlay1", password: "123qwe" }) {
      access_token
      user {
        email
        id
      }
    }
  }
`;
