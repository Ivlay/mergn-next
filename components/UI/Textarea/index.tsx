import { memo, forwardRef } from 'react';
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

import TextareaAutosize from 'react-autosize-textarea';

interface AreaProps {
  value?: string;
}

const AreaContainer = styled.div`
  width: 100%;
`;

const AreaStyle = styled(TextareaAutosize)`
  height: 50px;
  width: 100%;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.color};
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  overflow: scroll;
  resize: none;

  &::-webkit-scrollbar {
    display: none;
  }

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

const Textarea: React.FC<StyledComponentProps<'textarea', DefaultTheme, AreaProps, never>> =
  forwardRef(({ ...rest }, ref) => {
    return (
      <AreaContainer>
        <AreaStyle ref={ref} {...rest} />
      </AreaContainer>
    );
  });

Textarea.displayName = 'Textarea';
export default memo(Textarea);
