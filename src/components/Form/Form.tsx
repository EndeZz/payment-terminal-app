import { FC } from 'react';
import { FormCustom } from './Form.styled';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: FC<FormProps> = ({
  children,
  onSubmit,
  ...attrs
}) => (
  <FormCustom onSubmit={onSubmit} {...attrs}>
    {children}
  </FormCustom>
);

