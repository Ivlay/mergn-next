import { Input } from 'types';

export const INPUTS: Input<'username' | 'password'>[] = [
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
        message: '',
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
];
