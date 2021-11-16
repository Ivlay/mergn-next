import styled, { ThemeProvider } from 'styled-components';

import GlobalStyle from 'styles/globalStyles';
import { themes } from 'styles/theme';

const MainWrapper = styled.div`
    min-height: 100vh;
    max-width: 1210px;
    box-sizing: content-box;
    padding: 0 15px;
    margin: 0 auto;
`;

const MainLayout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={themes.dark}>
      <MainWrapper>
        <GlobalStyle />
        {children}
      </MainWrapper>
    </ThemeProvider>
  );
};

export default MainLayout;
