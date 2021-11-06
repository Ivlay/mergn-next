import Head from 'next/head';
import type { NextPage } from 'next';
import type { AppProps } from 'next/dist/shared/lib/router/router';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/globalStyles';
import { themes } from 'styles/theme';

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={themes.dark}>
			<GlobalStyle />
			<Head>
				<title>Title</title>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
