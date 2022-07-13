import { FC } from 'react';
import { Input, Label } from './Input.styled';

interface InputFieldProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  label?: string;
  children?: React.ReactNode;
}

export const InputField: FC<
  InputFieldProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  type,
  onChange,
  value,
  label = '',
  children,
  ...attrs
}) => (
  <>
    {label ? (
      <Label>
        <span>{label}</span>
        <Input type={type} value={value} onChange={onChange} {...attrs} />
        {children}
      </Label>
    ) : (
      <>
        <Input type={type} value={value} onChange={onChange} {...attrs} />
        {children}
      </>
    )}
  </>
);
