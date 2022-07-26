import { memo } from 'react';
import styled, { DefaultTheme, StyledComponentProps } from 'styled-components';

interface DeleteIconProps {
  value?: string;
}

const DeleteIconStyled = styled.div`
  position: absolute;
  right: 17px;
  top: -12px;
  width: 32px;
  height: 32px;
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &::before,
  &::after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 33px;
    width: 2px;
    background-color: #ffffff;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

const DeleteIcon: React.FC<StyledComponentProps<'div', DefaultTheme, DeleteIconProps, never>> = ({
  ...rest
}) => {
  return <DeleteIconStyled {...rest} />;
};

DeleteIcon.displayName = 'DeleteIcon';

export default memo(DeleteIcon);
