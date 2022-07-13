import { FC } from 'react';

import styled from 'styled-components';

const FormCustom = styled.form`
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

export { FormCustom };
