import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';
import { FC } from 'react';
import { Container, Main } from '../../styles/sharedstyles';
import { FormPayment } from '../../containers/FormPayment';
import { mocks } from '../../mocks/mocks';
import { getOperatorById } from '../../utils/getOperatorById';
import { IOperators } from '../../utils/types/IOperators';

const OperatorLogo = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 4rem;
  width: 4rem;
  margin-right: 12px;
`;

const OperatorWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
  width: 100%;
`;

const OperatorTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  grid-column: 2 / 4;
`;

interface OperatorProps {
  operator: IOperators;
}

const Operator: FC<OperatorProps> = ({ operator }) => {
  const titleOnPage = `Пополнение баланса: ${operator.title}`;
  return (
    <Container>
      <Head>
        <title>{titleOnPage}</title>
      </Head>
      <Main>
        <OperatorWrapper>
          <OperatorLogo>
            <Image
              src={operator.logo}
              alt={operator.title}
              width={40}
              height={40}
              layout="responsive"
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
  const paths = mocks.map(({ id }) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = (context) => {
  try {
    const { id } = context.params;
    const operator = getOperatorById(+id);

    if (!operator) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        operator,
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
