import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';
import Anchor from '../components/Anchor';
import { Container, Main } from '../components/sharedstyles';
import Board from '../containers/Board/Board';
import { IOperators } from '../utils/types/IOperators';

const ButtonAdd = styled(Anchor)`
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 12px 15px;
  color: ${({ theme }) => theme.colors.txt};

  &:hover {
    border-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.primary};
  }

  &:active {
    border-color: ${({ theme }) => theme.colors.primaryActive};
    transform: translateY(2px);
  }
`;

const ErrorMessage = styled.span`
  font-size: 2rem;
  display: flex;
  justify-content: center;
  text-align: center;
  transform: translateY(50px);
  color: ${({ theme }) => theme.colors.error};
`;

interface OperatorsProps {
  operators: IOperators[];
}

const Home: FC<OperatorsProps> = ({ operators }) => (
  <Container>
    <Head>
      <title>Список мобильных операторов</title>
    </Head>
    <Main>
      <>
        {operators === null ? (
          <ErrorMessage>Произошла непредвиденная ошибка</ErrorMessage>
        ) : (
          <>
            <Board operators={operators}></Board>
            <ButtonAdd href="/actions/add_operator">
              Добавить оператора
            </ButtonAdd>
          </>
        )}
      </>
    </Main>
  </Container>
);

export const getStaticProps: GetStaticProps = async () => {
  try {
    const fetchRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/operators`
    );
    const fetchData = await fetchRes.json();

    if (!fetchData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        operators: fetchData,
      },
    };
  } catch (e) {
    return {
      props: {
        operators: null,
      },
    };
  }
};

export default Home;
