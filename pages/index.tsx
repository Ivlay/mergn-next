import { NextPage } from 'next';
import Link from 'next/link';

import { SIGN_IN, SIGN_UP } from 'constants/routes';

import { Button } from 'components/UI';

const Home: NextPage = () => {
  return (
    <div>
      landing
      <Button>fiva</Button>
      <Link href={SIGN_IN}>Sign In</Link>
      <Link href={SIGN_UP}>Sign Up</Link>
    </div>
  );
};

export default Home;
