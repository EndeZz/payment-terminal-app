import { NextApiRequest, NextApiResponse } from 'next';
import { mocks } from '../../../mocks/mocks';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const filteredValues = mocks.find((item) => item.id === +req.query.id);
      if (filteredValues) {
        res.status(200).json(filteredValues);
      } else {
        res.status(404).json({ message: `Оператор не найден` });
      }
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
