import { useEffect } from 'react';

export const useTimeout = (
  isSuccess: boolean,
  isShow: boolean,
  func: () => void,
  delay: number
) => {
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isSuccess && isShow) {
      timer = setTimeout(func, delay);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, isShow]);
};
