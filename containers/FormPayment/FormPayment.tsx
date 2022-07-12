import { useRouter } from 'next/router';
import { FC, useCallback, useEffect, useState } from 'react';
import FormGroup from '../../components/FormGroup';
import InputField from '../../components/InputField';
import InputMasked from '../../components/InputMasked';
import { useOutside } from '../../hooks/useOutside';
import { formValidation } from '../../utils/formValidation';
import SuccessBox from '../SuccessBox/SuccessBox';
import {
  IFormPaymentValues,
  IFormPaymentDirtyValues,
  IFormErrors,
} from '../../utils/types/IForms';
import {
  ButtonBack,
  ButtonSubmit,
  ButtonWrapper,
  Caption,
  CaptionError,
} from './FormPayment.styled';
import { useTimeout } from '../../hooks/useTimeout';

const FormPayment: FC = () => {
  const router = useRouter();
  const { ref, isShow, setIsShow } = useOutside(false);
  const [formErrors, setFormErrors] = useState<IFormErrors>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [formDirty, setFormDirty] = useState<IFormPaymentDirtyValues>({
    phoneNumber: false,
    amount: false,
  });
  const [formValues, setFormValues] = useState<IFormPaymentValues>({
    phoneNumber: '',
    amount: '',
  });

  const goBack = useCallback(() => {
    router.push('/');
  }, [router]);

  useTimeout(isSuccess, isShow, goBack, 3000);

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
        body: JSON.stringify({
          phoneNumber: formValues.phoneNumber,
          amount: formValues.amount.replace(/^0+/, ''),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (JSON.stringify(formErrors) === '{}') {
        try {
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payment`, config);
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
        {errorMessage ? (
          <CaptionError>{errorMessage}</CaptionError>
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

      {isShow && (
        <SuccessBox
          propsRef={ref}
          title="Счет успешно пополнен!"
          caption="Возврат на главный экран через 3 секунды"
        />
      )}

      {errorMessage && <CaptionError>{errorMessage}</CaptionError>}
    </FormGroup>
  );
};

export default FormPayment;
