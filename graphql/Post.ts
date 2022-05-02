import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation Login($username: String!, $password: String!) {
    login(loginUserInput: { username: $username, password: $password }) {
      access_token
      user {
        email
        id
      }
    }
  }
`;
export const SIGN_UP = gql`
  mutation Signup(
    $email: String!
    $username: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      createUserInput: {
        email: $email
        username: $username
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      access_token
      user {
        email
        id
      }
    }
  }
`;

export const POSTS = gql`
  query {
    posts(paging: { order: "desc", orderBy: "createdAt", limit: 10, skip: 0 }) {
      id
      body
      createdAt
      updatedAt
      username
      userId
      likesCount
    }
  }
`;

export const POST = gql`
  query Post($postId: String!) {
    post(postId: $postId) {
      id
      likesCount
      username
      comments {
        id
        body
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation CreatePostTextarea($body: String!) {
    createPost(createPostInput: { body: $body }) {
      body
    }
  }
`;

export const LIKE_POST = gql`
  mutation LikePost($postId: String!) {
    likePost(postId: $postId) {
      likesCount
      id
      body
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation CreateComment($body: String!, $postId: String!) {
    createComment(createCommentInput: { body: $body, postId: $postId }) {
      id
      body
    }
  }
`;
