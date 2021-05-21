import { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import { themeGet } from '../..'

interface ButtonProps {
  children?: ReactNode
  text?: string
  size?: 'small' | 'medium' | 'large';
  intent?: 'primary' | 'success' | 'warning' | 'error';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  &:disabled,
  [disabled] {
    pointer-events: none;
    background: ${themeGet('colors.primary.hoverBackground')};
  }
  background: ${themeGet('colors.primary.background')};
  color: ${themeGet('colors.primary.text')};
  transition: 0.5s;
  &:hover {
    background: ${themeGet('colors.primary.hoverBackground')};
    color: ${themeGet('colors.primary.hoverText')};
  }
`;
const Button: FunctionComponent<ButtonProps> = ({ children, text, size, intent, onClick }: ButtonProps) => <StyledButton onClick={onClick}>{text || children }</StyledButton>;

export default Button;
