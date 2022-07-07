import { FC } from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

const Label = styled.label`
  font-size: 1.6rem;
  line-height: 2.2rem;
  display: grid;
  position: relative;
  gap: 8px;
`;

const Input = styled(InputMask)`
  height: 48px;
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

interface InputMaskedProps {
  value: string | number;
  mask: string;
  maskChar?: string;
  size?: number;
  label?: string;
  children?: React.ReactNode;
}

const InputMasked: FC<
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
        <Input value={value} mask={mask} {...attrs} />
        {children}
      </Label>
    ) : (
      <>
        <Input value={value} mask={mask} {...attrs} />
        {children}
      </>
    )}
  </>
);

export default InputMasked;
