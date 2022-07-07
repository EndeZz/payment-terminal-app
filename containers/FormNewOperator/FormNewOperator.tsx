import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';
import FormGroup from '../../components/FormGroup';
import InputField from '../../components/InputField';
import { useOutside } from '../../hooks/useOutside';
import {
  ButtonBack,
  ButtonSubmit,
  ButtonWrapper,
  CaptionSuccess,
  SuccessBox,
  TitleSuccess,
} from './FormNewOperator.styled';

interface FormValuesProps {
  title: string;
}

const FormNewOperator: FC = () => {
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

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
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
    },
    [formValues]
  );

  return (
    <>
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
    </>
  );
};

export default FormNewOperator;
