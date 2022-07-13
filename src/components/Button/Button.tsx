import { FC } from 'react';
import { ButtonCustom } from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
  type?: string;
}

export const Button: FC<ButtonProps &  React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...attrs
}) => (
  <ButtonCustom {...attrs}>
    {children}
  </ButtonCustom>
)
