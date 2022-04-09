import { NextPage } from 'next';
import { useMutation } from '@apollo/client';
import { Input } from 'src/components/UI';
import { LOGIN } from 'graphql/Post';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  login: string;
  password: string;
}

const Login: NextPage = () => {
  const INPUTS = [
    {
      name: 'username',
      required: true,
      type: 'text',
      id: 1,
    },
    {
      name: 'password',
      required: true,
      type: 'password',
      id: 2,
    },
  ];

  const [getPosts, { data }] = useMutation(LOGIN);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  const loadPost = () => {
    getPosts();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {INPUTS.map((itemInput) => {
          return (
            <Input
              placeholder={itemInput.name}
              key={itemInput.id}
              name={itemInput.name}
              type={itemInput.type}
              {...register(itemInput.name, { required: true })}
            />
          );
        })}
        {errors.username || errors.password ? <span>This field is required</span> : <></>}
        <Input type="submit"/>
      </form>
    </div>
  );
};

export default Login;
