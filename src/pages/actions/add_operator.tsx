import Head from 'next/head';
import { FC } from 'react';
import { Container, Main } from '../../styles/sharedstyles';
import { FormNewOperator } from '../../containers/FormNewOperator';

const NewOperator: FC = () => {
  return (
    <Container>
      <Head>
        <title>Добавить оператора</title>
      </Head>
      <Main>
        <FormNewOperator />
      </Main>
    </Container>
  );
};

export default NewOperator;
