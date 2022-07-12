import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import styled from 'styled-components';
import Anchor from '../components/Anchor';
import { Container, Main } from '../components/sharedstyles';
import Board from '../containers/Board/Board';
import { fetchOperators } from '../utils/api/apiRequests';
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
    const operators = await fetchOperators();

    if (!operators) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        operators,
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
