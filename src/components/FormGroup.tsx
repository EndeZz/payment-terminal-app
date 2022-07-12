import { FC } from 'react';

import styled from 'styled-components';

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-row-gap: 20px;

  & input {
    &::placeholder {
      color: ${({ theme }) => theme.colors.gray200};
    }
  }
`;

interface FormGroupProps {
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormGroup: FC<FormGroupProps> = ({
  children,
  onSubmit,
  ...attrs
}) => (
  <Form onSubmit={onSubmit} {...attrs}>
    {children}
  </Form>
);

export default FormGroup;
