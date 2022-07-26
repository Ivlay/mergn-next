import { memo, forwardRef } from 'react';
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

interface InputCommentProps {
  helperText?: string;
}

const InputContainer = styled.div`
  width: 100%;
`;

const ErrorMessage = styled.p`
  margin-top: 5px;
  color: ${(props) => props.theme.errorText};
  font-size: 10px;
`;

const InputStyle = styled.input`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
  padding: 5px;
  border-radius: 10px;
  border: 1px #767676 solid;

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

const InputComment: React.FC<
  StyledComponentProps<'input', DefaultTheme, InputCommentProps, never>
> = forwardRef(({ helperText, ...rest }, ref) => {
  return (
    <InputContainer>
      <InputStyle ref={ref} {...rest} />
      {helperText && <ErrorMessage>{helperText}</ErrorMessage>}
    </InputContainer>
  );
});

InputComment.displayName = 'Input';

export default memo(InputComment);
