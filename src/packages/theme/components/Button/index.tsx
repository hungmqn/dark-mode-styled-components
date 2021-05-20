import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { themeGet } from '../..'

interface ButtonProps {
  children?: ReactNode
  text?: string
  size?: 'small' | 'medium' | 'large';
}

const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: ${themeGet('colors.color')};
  background-color: ${themeGet('colors.backgroundColor')};
`;
const Button: FunctionComponent<ButtonProps> = ({ children, text, size }: ButtonProps) => <StyledButton>{text || children }</StyledButton>;

export default Button;
