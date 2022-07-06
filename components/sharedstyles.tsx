import styled from 'styled-components';

const Container = styled.div`
  padding: 0 0.5rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
`;

const Main = styled.main`
  display: grid;
  gap: 20px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.gray100};
  padding: 30px;
  width: 100%;
  max-width: 412px;
  height: max-content;
  max-height: 412px;
  overflow: auto;
`;

export { Container, Main };
