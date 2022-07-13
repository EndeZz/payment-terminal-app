import { FC } from 'react';
import { InputMaskCustom, Label } from './Input.styled';

interface InputMaskedProps {
  value: string | number;
  mask: string;
  maskChar?: string;
  label?: string;
  children?: React.ReactNode;
}

export const InputMasked: FC<
  InputMaskedProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  value,
  mask,
  maskChar,
  label = '',
  children,
  ...attrs
}) => (
  <>
    {label ? (
      <Label>
        <span>{label}</span>
        <InputMaskCustom value={value} mask={mask} maskChar={maskChar} {...attrs} />
        {children}
      </Label>
    ) : (
      <>
        <InputMaskCustom value={value} mask={mask} maskChar={maskChar} {...attrs} />
        {children}
      </>
    )}
  </>
);
