import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/dist/shared/lib/router/router';

import { themes } from 'styles/theme';
import GlobalStyle from 'styles/globalStyles';

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
