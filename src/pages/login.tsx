import { NextPage } from 'next';
import { useMutation } from '@apollo/client';
import { Button } from 'src/components/UI';
import { LOGIN } from 'graphql/Post';

const Login: NextPage = () => {
  const [getPosts, { data }] = useMutation(LOGIN);

  console.log('data :>> ', data);

  const loadPost = () => {
    console.log('qweqweqwe');

    getPosts();
  };

  return (
    <div>
      Login page
      <Button onClick={loadPost}> 
        Load posts
      </Button>
    </div>
  );
};

export default Login;
