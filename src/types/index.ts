import { RegisterOptions } from 'react-hook-form';

export interface Input {
  name: string;
  placeholder: string;
  type: string;
  rules?: Omit<
    RegisterOptions<unknown, never>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}
