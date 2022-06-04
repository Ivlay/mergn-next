import { Input } from 'types';

export const INPUTS: Input<'username' | 'password' | 'email' | 'confirmPassword'>[] = [
  {
    name: 'email',
    placeholder: 'Email',
    rules: {
      required: {
        value: true,
        message: 'This field is required',
      },
    },
    type: 'email',
  },
  {
    name: 'username',
    placeholder: 'Username or email',
    rules: {
      required: {
        value: true,
        message: 'This field is required',
      },
      pattern: {
        value: /^[a-zA-Z0-9]+$/,
        message: 'Username can only contain alphabets and number',
      },
    },
    type: 'text',
  },
  {
    name: 'password',
    placeholder: 'Password',
    rules: {
      required: {
        value: true,
        message: 'This field is required',
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
        message: 'The password must get one uppercase letter, one small letter, the number of characters must be between 6 and 15',
      },
    },
    type: 'password',
  },
  {
    name: 'confirmPassword',
    placeholder: 'Confirm password',
    rules: {
      required: {
        value: true,
        message: 'This field is required',
      },
      pattern: {
        value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
        message: 'The password must get one uppercase letter, one small letter, the number of characters must be between 6 and 15',
      },
    },
    type: 'password',
  },
];
