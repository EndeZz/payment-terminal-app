import { FC } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.6rem;
  line-height: 2.2rem;
  display: grid;
  position: relative;
  gap: 8px;
`;

const Input = styled.input`
  height: 50px;
  width: 100%;
  padding: 17px;
  border: 1px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 8px;
  outline: none;
  background-color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 1.6rem;
`;

interface InputFieldProps {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  label?: string;
  children?: React.ReactNode;
}

const InputField: FC<
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

export default InputField;
