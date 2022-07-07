import { FormValuesProps } from "../containers/FormPayment/FormPayment";

interface IAmount {
  [key: string]: string;
}

export const formValidation = (value: FormValuesProps) => {
  const errors: IAmount = {};

  if (!String(value.amount).length) {
    errors.amount = 'Поле обязательно для заполнения';
  } else if (String(value.amount).length > 4 || +value.amount > 1000) {
    errors.amount = 'Допустимо пополнение на сумму от 1 до 1000 ₽';
  } else if (isNaN(+value.amount)) {
    errors.amount = 'Некорректная сумма';
  }

  if (!String(value.phoneNumber).length) {
    errors.phoneNumber = 'Поле обязательно для заполнения';
  }
  return errors;
};
