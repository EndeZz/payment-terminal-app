export const sendPayment = async (config: RequestInit) => {
  try {
    const fetchRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/payment`,
      config
    );

    if (!fetchRes.ok) {
      throw new Error(`Ошибка HTTP! Статус: ${fetchRes.status}`);
    }

    const fetchData = await fetchRes.json();
    return fetchData;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const createOperator = async (config: RequestInit) => {
  try {
    const fetchRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/operators`,
      config
    );

    if (!fetchRes.ok) {
      throw new Error(`Ошибка HTTP! Статус: ${fetchRes.status}`);
    }

    const fetchData = await fetchRes.json();
    return fetchData;
  } catch (e) {
    throw new Error(e.message);
  }
};

export const fetchOperators = async () => {
  try {
    const fetchRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/operators`
    );

    if (!fetchRes.ok) {
      throw new Error(`Ошибка HTTP! Статус: ${fetchRes.status}`);
    }

    const fetchData = await fetchRes.json();
    return fetchData;
  } catch (e) {
    throw new Error(e.message);
  }
};
