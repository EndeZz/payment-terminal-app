import { NextApiRequest, NextApiResponse } from 'next';
import { mocks } from '../../../mocks/mocks';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      if (mocks.length > 0) {
        res.status(200).json(mocks);
      } else {
        res.status(404).json({ message: `Операторы не найдены` });
      }
      break;

    case 'POST':
      const { title, logo } = req.body;
      const newOperator = {
        id: Date.now(),
        title: title,
        logo: logo,
      };
      mocks.push(newOperator);
      res.status(201).json(newOperator);
      break;

    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
