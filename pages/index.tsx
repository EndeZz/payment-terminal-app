import { GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import { Container, Main } from '../components/sharedstyles';
import Board from '../containers/Board/Board';
import { IOperators } from '../utils/types/IOperators';

interface OperatorsProps {
  operators: IOperators[];
}

const Home: FC<OperatorsProps> = ({ operators }) => {
  return (
    <Container>
      <Head>
        <title>Список мобильных операторов</title>
      </Head>
      <Main>
        <Board operators={operators}></Board>
      </Main>
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const fetchRes = await fetch(`${process.env.API_URL}/api/operators`);
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
