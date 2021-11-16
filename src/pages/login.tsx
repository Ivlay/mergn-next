import { NextPage, GetStaticProps } from 'next';
import { gql } from '@apollo/client';

import apolloClient from 'ApolloClient';

const Login: NextPage<{ countries: Array<any> }> = ({ countries }) => {
  return (
    <div>
      Login page
      {countries.map((country) => (
        <div key={country.code}>
          <h3>{country.name}</h3>
          <p>
            {country.code}
-
{country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
    revalidate: 3,
  };
};

export default Login;
