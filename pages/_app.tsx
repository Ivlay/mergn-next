import Head from 'next/head';
import type { NextPage } from 'next';
import type { AppProps } from 'next/dist/shared/lib/router/router';
import { ApolloProvider } from '@apollo/client';

import apolloClient from 'ApolloClient';

import MainLayout from 'layouts/MainLayout';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <MainLayout>
        <Head>
          <title>Title</title>
        </Head>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
};

export default App;
