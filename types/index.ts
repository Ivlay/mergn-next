import { RegisterOptions } from 'react-hook-form';

export interface Input<T> {
  name: T;
  placeholder: string;
  type: string;
  rules?: Omit<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    RegisterOptions<any, any>,
    'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
  >;
}
