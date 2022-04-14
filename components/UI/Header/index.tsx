import { memo } from 'react';
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

interface HeaderProps {
  children?: string;
}

const HeaderStyled = styled.header`
  color: ${(props) => props.theme.color};
  width: 100%;
  padding: 10px 0;
  font-size: 24px;
  text-align: center;
`;

const Header: React.FC<StyledComponentProps<'header', DefaultTheme, HeaderProps, never>> = ({
  children,
  ...rest
}) => {
  return <HeaderStyled {...rest}>{children}</HeaderStyled>;
};

Header.displayName = 'Header';

export default memo(Header);
