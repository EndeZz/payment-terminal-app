import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { FC } from 'react';
import styled from 'styled-components';
import { Container, Main } from '../../components/sharedstyles';
import FormPayment from '../../containers/FormPayment/FormPayment';
import { IOperators } from '../../utils/types/IOperators';

const OperatorLogo = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 40px;
  width: 40px;
  margin-right: 12px;
`;

const OperatorWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

const OperatorTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

interface OperatorProps {
  operator: IOperators;
}

const Operator: FC<OperatorProps> = ({ operator }) => {
  return (
    <Container>
      <Head>
        <title>Пополнение баланса: {operator.title}</title>
      </Head>
      <Main>
        <OperatorWrapper>
          <OperatorLogo>
            <Image
              src={operator.logo}
              alt={operator.title}
              width={40}
              height={40}
            />
          </OperatorLogo>
          <OperatorTitle>{operator.title}</OperatorTitle>
        </OperatorWrapper>

        <FormPayment />
      </Main>
    </Container>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const fetchRes = await fetch(`${process.env.API_URL}/api/operators`);
  const fetchData = await fetchRes.json();

  const paths = fetchData.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const { id } = context.params;
    const fetchRes = await fetch(`${process.env.API_URL}/api/operators/${id}`);
    const fetchData = await fetchRes.json();

    if (!fetchData) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        operator: fetchData,
      },
    };
  } catch (e) {
    return {
      props: {
        operator: null,
      },
    };
  }
};

export default Operator;
