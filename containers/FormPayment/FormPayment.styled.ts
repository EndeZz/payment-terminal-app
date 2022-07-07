import styled from 'styled-components';
import Button from '../../components/Button';

const CaptionError = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.2rem;
  position: absolute;
  top: 84px;
  color: ${({ theme }) => theme.colors.error};
`;

const Caption = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.2rem;
  position: absolute;
  top: 84px;
  color: ${({ theme }) => theme.colors.gray200};
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSubmit = styled(Button)`
  border-radius: 25px;
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primaryActive};
    border-color: ${({ theme }) => theme.colors.primaryActive};
    color: ${({ theme }) => theme.colors.light};
    transform: translateY(2px);
  }
`;

const ButtonBack = styled(Button)`
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 15px;
  color: ${({ theme }) => theme.colors.txt};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.bg};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors.primaryActive};
    transform: translateY(2px);
  }
`;

export { Caption, CaptionError, ButtonWrapper, ButtonSubmit, ButtonBack };
