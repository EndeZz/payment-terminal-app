import styled from 'styled-components';
import Button from '../../components/Button';

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;

  @media only screen and (max-width: ${({ theme }) => theme.media.md}) {
    display: grid;
    grid-template-columns: minmax(100%, 1fr);
    gap: 10px;
  }
`;

const ButtonSubmit = styled(Button)`
  border-radius: 25px;
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};
  grid-column: 2 / 4;
  justify-self: end;

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

  @media only screen and (max-width: ${({ theme }) => theme.media.md}) {
    width: 100%;
    justify-content: center;
    grid-column: 1;
    grid-row: 1;
  }
`;

const ButtonBack = styled(Button)`
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 15px;
  color: ${({ theme }) => theme.colors.txt};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors.primaryActive};
    transform: translateY(2px);
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.md}) {
    width: 100%;
    justify-content: center;
    grid-column: 1;
    grid-row: 2;
  }
`;

const SuccessBox = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: max-content;
  color: ${({ theme }) => theme.colors.success};
  padding: 50px;
  border: 1px dashed ${({ theme }) => theme.colors.success};
  background-color: ${({ theme }) => theme.colors.light};
  text-align: center;
  box-shadow: 0 0 24px ${({ theme }) => theme.colors.gray100};
`;

const TitleSuccess = styled.p`
  font-size: 2.2rem;
  font-weight: 500;
`;

const CaptionSuccess = styled.span`
  font-size: 1.8rem;
  font-weight: 400;
`;

export {
  ButtonWrapper,
  ButtonSubmit,
  ButtonBack,
  SuccessBox,
  TitleSuccess,
  CaptionSuccess,
};
