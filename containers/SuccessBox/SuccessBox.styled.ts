import styled from 'styled-components';

const SuccessBoxWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: max-content;
  color: ${({ theme }) => theme.colors.success};
  padding: 50px;
  border: 2px dashed ${({ theme }) => theme.colors.success};
  border-radius: 15px;
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

export { CaptionSuccess, TitleSuccess, SuccessBoxWrapper };
