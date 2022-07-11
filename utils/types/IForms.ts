export interface IFormPaymentValues {
  phoneNumber: string;
  amount: string;
}

export interface IFormPaymentDirtyValues {
  phoneNumber: boolean;
  amount: boolean;
}

export interface IFormErrors {
  [key: string]: string;
}

export interface IFormNewOperatorValues {
  title: string;
}
