import { Input } from 'types';

export const INPUT: Input<'body'> = {
  name: 'body',
  type: 'text',
  placeholder: 'added comment',
  rules: {
    required: {
      value: true,
      message: 'This field is required',
    },
  },
};
