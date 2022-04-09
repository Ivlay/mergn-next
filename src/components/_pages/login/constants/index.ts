import { Input } from 'src/types';

export const INPUTS: Input[] = [
  {
    name: 'username',
    placeholder: 'Username or email',
    rules: {
      required: {
        value: true,
        message: 'This field is required',
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
    },
    type: 'password',
  },
];
