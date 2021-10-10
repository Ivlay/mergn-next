import { memo, ReactNode } from 'react';
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

interface Button {
  children?: ReactNode
}

const StyledButton = styled.button`
  position: relative;
  padding: 4px 7px;
  border: none;
  border-radius: 2px;
  background-color: transparent;
  background-image: linear-gradient(
        312.44deg, ${props => props.theme.button.gradient[1]} 0%,
        ${props => props.theme.button.gradient[2]} 100%
    );

  color: ${props => props.theme.button.color};
  font-family: 'Lato', sans-serif;
  cursor: pointer;
  text-decoration: none;

  &::disabled {
    cursor: default;
    opacity: 0.3;
  }
`;

const Button: React.FC<StyledComponentProps<"button", DefaultTheme, Button, never>> = ({ children, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  );
};

export default memo(Button);
