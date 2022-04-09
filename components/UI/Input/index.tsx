import { memo, forwardRef } from 'react';
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

interface InputProps {
  helperText?: string;
}

const InputContainer = styled.div`
  width: 100%;
  max-width: 200px;
  min-height: 80px;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: ${(props) => props.theme.errorText};
  font-size: 10px;
`;

const InputStyle = styled.input`
  height: 48px;
  width: 100%;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.color};
  color: ${(props) => props.theme.color};
  background-color: transparent;
  padding: 9px 16px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: color 9999s ease-out, background-color 9999s ease-out;
    transition-delay: 9999s;
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.button.gradient[1]};
    box-shadow: 0 23px 32px -22px ${(props) => props.theme.button.gradient[1]};
  }
`;

const Input: React.FC<StyledComponentProps<'input', DefaultTheme, InputProps, never>> = forwardRef(
  ({ helperText, ...rest }, ref) => {
    return (
      <InputContainer>
        <InputStyle ref={ref} {...rest} />
        {helperText && <ErrorMessage>{helperText}</ErrorMessage>}
      </InputContainer>
    );
  },
);

Input.displayName = 'Input';

export default memo(Input);
