import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';
import { Anchor } from '../components/Anchor';
import { Container, Main } from '../styles/sharedstyles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 30px;
`;

const Subtitle = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const ErrorCaption = styled.p`
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const LinkGoHome = styled(Anchor)`
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    color: ${({ theme }) => theme.colors.primaryActive};
  }
`;

const NotFoundPage: FC = () => (
  <Container>
    <Head>
      <title>404</title>
    </Head>
    <Main>
      <Wrapper>
        <Title>
          Ошибка <Subtitle>404</Subtitle>
        </Title>
        <ErrorCaption>Страница не найдена.</ErrorCaption>
        <ErrorCaption>
          Вернуться к&nbsp;
          <LinkGoHome href="/">списку операторов</LinkGoHome>
        </ErrorCaption>
      </Wrapper>
    </Main>
  </Container>
);

export default NotFoundPage;
