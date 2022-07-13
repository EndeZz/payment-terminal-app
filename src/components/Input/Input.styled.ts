import InputMask from 'react-input-mask';
import styled, { css } from 'styled-components';

const Label = styled.label`
  font-size: 1.6rem;
  line-height: 2.2rem;
  display: grid;
  position: relative;
  gap: 8px;
`;

const basicInputStyle = css`
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

  & :hover {
    border: 1px solid ${({ theme }) => theme.colors.gray200};
  }

  & :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

const Input = styled.input`
  ${basicInputStyle}
`;

const InputMaskCustom = styled(InputMask)`
  ${basicInputStyle}
`;

export { Label, Input, InputMaskCustom };
