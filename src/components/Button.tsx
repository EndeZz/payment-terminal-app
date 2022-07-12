import { FC } from 'react';

import styled from 'styled-components';

const ButtonCustom = styled.button`
  font-size: 1.6rem;
  line-height: 2.2rem;
  border: 1px solid transparent;
  border: 0;
  background: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  width: fit-content;
  gap: 6px;

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
}

const Button: FC<ButtonProps &  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...attrs
}) => (
  <ButtonCustom {...attrs}>
    {children}
  </ButtonCustom>
)


export default Button;
