import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation Login($username: String!, $password: String!) {
    login(loginUserInput: { username: $username, password: $password }) {
      access_token
      user {
        username
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
  query Post($postId: ID!) {
    post(postId: $postId) {
      id
      username
      likesCount
      commentsCount
      comments {
        id
        body
        username
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
  mutation LikePost($postId: ID!) {
    likePost(postId: $postId) {
      likesCount
      id
      body
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation AddCommnet($body: String!, $postId: ID!) {
    createComment(createCommentInput: { body: $body, postId: $postId }) {
      body
      username
      id
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;

export const CURENT_USER = gql`
  query {
    currentUser {
      username
    }
  }
`;
