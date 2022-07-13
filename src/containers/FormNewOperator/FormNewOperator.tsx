import { useRouter } from 'next/router';
import { FC, useCallback, useState } from 'react';
import { Form } from '../../components/Form';
import { InputField } from '../../components/Input';
import { useOutside } from '../../hooks/useOutside';
import { useTimeout } from '../../hooks/useTimeout';
import { createOperator } from '../../utils/api/apiRequests';
import { goBack } from '../../utils/goBack';
import { IFormNewOperatorValues } from '../../utils/types/IForms';
import { CaptionError } from '../FormPayment/FormPayment.styled';
import { SuccessBox } from '../SuccessBox';
import {
  ButtonBack,
  ButtonSubmit,
  ButtonWrapper,
} from './FormNewOperator.styled';

export const FormNewOperator: FC = () => {
  const router = useRouter();
  const { ref, isShow, setIsShow } = useOutside(false);
  const [formValues, setFormValues] = useState<IFormNewOperatorValues>({
    title: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

  useTimeout(isSuccess, isShow, () => goBack(router), 3000);

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

      const config: RequestInit = {
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
          await createOperator(config);
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
      <Form onSubmit={handleSubmit}>
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
          <ButtonBack type="button" onClick={() => goBack(router)}>
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
      </Form>
    </>
  );
};
