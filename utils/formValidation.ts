import { IFormPaymentValues } from './types/IForms';
interface IAmount {
  [key: string]: string;
}

export const formValidation = (value: IFormPaymentValues) => {
  const errors: IAmount = {};
  const correctAmount: number = +value.amount.replace(/^0+/, '');

  if (!String(correctAmount).length) {
    errors.amount = 'Поле обязательно для заполнения';
  } else if (
    String(correctAmount).length > 4 ||
    correctAmount > 1000 ||
    correctAmount <= 0
  ) {
    errors.amount = 'Допустимо пополнение на сумму от 1 до 1000 ₽';
  } else if (isNaN(correctAmount)) {
    errors.amount = 'Некорректная сумма';
  }

  if (!value.phoneNumber.length) {
    errors.phoneNumber = 'Поле обязательно для заполнения';
  } else if (value.phoneNumber.length !== 18) {
    errors.phoneNumber = 'Введите полный номер телефона';
  }
  return errors;
};
