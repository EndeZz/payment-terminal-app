import { useRouter } from 'next/router';
import { FC, useCallback, useState } from 'react';
import FormGroup from '../../components/FormGroup';
import InputField from '../../components/InputField';
import InputMasked from '../../components/InputMasked';
import { useOutside } from '../../hooks/useOutside';
import { formValidation } from '../../utils/formValidation';
import {
  ButtonBack,
  ButtonSubmit,
  ButtonWrapper,
  Caption,
  CaptionError,
} from './FormPayment.styled';

interface FormErrorsProps {
  [key: string]: string;
}

export interface FormValuesProps {
  phoneNumber: string;
  amount: string;
}

interface FormDirtyValuesProps {
  phoneNumber: boolean;
  amount: boolean;
}

const FormPayment: FC = () => {
  const router = useRouter();
  const { ref, isShow, setIsShow } = useOutside(false);
  const [isError, setIsError] = useState<string | null>(null);
  const [formErrors, setFormErrors] = useState<FormErrorsProps>({});

  const [formDirty, setFormDirty] = useState<FormDirtyValuesProps>({
    phoneNumber: false,
    amount: false,
  });
  const [formValues, setFormValues] = useState<FormValuesProps>({
    phoneNumber: '',
    amount: '',
  });

  const goBack = useCallback(() => {
    router.push('/');
  }, [router]);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const targetValue = e.target.name;
    switch (targetValue) {
      case 'phoneNumber':
        setFormDirty({
          ...formDirty,
          [targetValue]: true,
        });
        break;
      case 'amount':
        setFormDirty({
          ...formDirty,
          [targetValue]: true,
        });
        break;
    }
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormErrors(
        formValidation({
          ...formValues,
          [e.target.name]: e.target.value,
        })
      );
      setFormValues({
        ...formValues,
        [e.target.name]: e.target.value,
      });
    },
    [formValues, formErrors]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setFormErrors(
        formValidation({
          ...formValues,
        })
      );

      const config = {
        method: 'POST',
        body: JSON.stringify({ formValues }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (JSON.stringify(formErrors) === '{}') {
        console.log('SUBMIT');
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
    [formValues, formErrors]
  );

  return (
    <FormGroup onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="amount"
        value={formValues.amount}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        maxLength={4}
        required
        label="Введите сумму">
        {formErrors.amount && formDirty.amount ? (
          <CaptionError>{formErrors.amount}</CaptionError>
        ) : (
          <Caption>от 1 до 1000 ₽</Caption>
        )}
      </InputField>

      <InputMasked
        mask="+7\(999) 999-99-99"
        maskChar=" "
        type="text"
        name="phoneNumber"
        value={formValues.phoneNumber}
        onChange={handleChange}
        onBlur={handleBlur}
        autoComplete="off"
        required
        label="Номер телефона">
        {isError ? (
          <CaptionError>{isError}</CaptionError>
        ) : (
          formErrors.phoneNumber &&
          formDirty.phoneNumber && (
            <CaptionError>{formErrors.phoneNumber}</CaptionError>
          )
        )}
      </InputMasked>

      <ButtonWrapper>
        <ButtonBack type="button" onClick={goBack}>
          Назад
        </ButtonBack>
        <ButtonSubmit type="submit">Пополнить баланс</ButtonSubmit>
      </ButtonWrapper>
    </FormGroup>
  );
};

export default FormPayment;
