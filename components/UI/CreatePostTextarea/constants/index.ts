import { Textarea } from 'types';

export const TEXTAREA: Textarea<'body'> = {
  name: 'body',
  placeholder: 'Что у вас нового?',
  rules: {
    required: {
      value: true,
      message: 'This field is required',
    },
  },
};
