import { mocks } from '../mocks/mocks';

export const getOperatorById = (id: number) =>
  mocks.find((item) => item.id === id);
