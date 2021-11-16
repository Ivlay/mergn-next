import { NextPage } from 'next';
import Link from 'next/link';

import { LOGIN } from 'constants/routes';

import { Button } from 'components/UI';

const Home: NextPage = () => {
  return (
    <div>
      landing
      <Button>
        fiva
      </Button>
      <Link href={LOGIN}>
        Login page
      </Link>
    </div>
  );
};

export default Home;
