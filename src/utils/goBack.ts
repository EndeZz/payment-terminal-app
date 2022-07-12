import { NextRouter } from "next/router";

export const goBack = (router: NextRouter | string[]) => {
  router.push('/');
};
