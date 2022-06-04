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
  mutation Signup($email: String!, $username: String!, $password: String!, $confirmPassword: String!) {
    signup(createUserInput: { email: $email, username: $username, password: $password, confirmPassword: $confirmPassword }) {
      access_token
      user {
        email
        id
      }
    }
  }
`;
