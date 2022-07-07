import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import FormGroup from '../../components/FormGroup';
import InputField from '../../components/InputField';
import InputMasked from '../../components/InputMasked';
import { Container, Main } from '../../components/sharedstyles';
import { Caption } from '../../containers/FormPayment/FormPayment.styled';
import { useOutside } from '../../hooks/useOutside';
import { IOperators } from '../../utils/types/IOperators';

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSubmit = styled(Button)`
  border-radius: 25px;
  padding: 12px 15px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.light};

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
`;

const SuccessBox = styled.div`
  position: absolute;
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

interface FormValuesProps {
  title: string;
}

interface newOperatorProps {
  operator: IOperators;
}

const NewOperator: FC<newOperatorProps> = () => {
  const router = useRouter();
  const { ref, isShow, setIsShow } = useOutside(false);
  const [formValues, setFormValues] = useState<FormValuesProps>({ title: '' });
  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    if (isShow) {
      setTimeout(() => {
        goBack();
      }, 3000);
    }
  }, [isShow]);

  const goBack = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    },
    [formValues]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const config = {
      method: 'POST',
      body: JSON.stringify({
        title: formValues.title,
        logo: '/images/default_logo.png',
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (JSON.stringify(formValues) !== '{}') {
      try {
        const fetchRes = await fetch(
          `${process.env.API_URL}/api/operators`,
          config
        );
        const fetchData = await fetchRes.json();
        console.log(fetchData);
        setIsShow(true);
        setIsError(null);
      } catch (error) {
        setIsShow(false);
        setIsError('Ошибка при отправке данных');
      }
    }
  };

  return (
    <Container>
      <Head>
        <title>Добавить оператора</title>
      </Head>
      <Main>
        <FormGroup onSubmit={handleSubmit}>
          <InputField
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
            autoComplete="off"
            required
            label="Введите оператора"
          />
          <ButtonWrapper>
            <ButtonBack type="button" onClick={goBack}>
              Назад
            </ButtonBack>
            <ButtonSubmit type="submit">Добавить оператора</ButtonSubmit>
          </ButtonWrapper>
          {isShow && (
            <SuccessBox ref={ref}>
              <TitleSuccess>Оператор успешно добавлен</TitleSuccess>
              <CaptionSuccess>
                Возврат на главный экран через 3 секунды
              </CaptionSuccess>
            </SuccessBox>
          )}
        </FormGroup>
        {isError && <span>{isError}</span>}
      </Main>
    </Container>
  );
};

export default NewOperator;
