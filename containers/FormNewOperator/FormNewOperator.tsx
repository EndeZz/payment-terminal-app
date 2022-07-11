import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';
import FormGroup from '../../components/FormGroup';
import InputField from '../../components/InputField';
import { useOutside } from '../../hooks/useOutside';
import { IFormNewOperatorValues } from '../../utils/types/IForms';
import { CaptionError } from '../FormPayment/FormPayment.styled';
import SuccessBox from '../SuccessBox/SuccessBox';
import {
  ButtonBack,
  ButtonSubmit,
  ButtonWrapper,
} from './FormNewOperator.styled';

const FormNewOperator: FC = () => {
  const router = useRouter();
  const { ref, isShow, setIsShow } = useOutside(false);
  const [formValues, setFormValues] = useState<IFormNewOperatorValues>({
    title: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => goBack(), 3000);
    }
  }, [isSuccess]);

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
          logo: '/default-logo.png',
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (JSON.stringify(formValues) !== '{}') {
        try {
          await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/operators`,
            config
          );
          setIsShow(true);
          setIsSuccess(true);
          setErrorMessage(null);
        } catch (error) {
          setIsShow(false);
          setIsSuccess(false);
          setErrorMessage('Ошибка при отправке данных');
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
          <SuccessBox
            propsRef={ref}
            title="Оператор успешно добавлен"
            caption="Возврат на главный экран через 3 секунды"
          />
        )}

        {errorMessage && <CaptionError>{errorMessage}</CaptionError>}
      </FormGroup>
    </>
  );
};

export default FormNewOperator;
