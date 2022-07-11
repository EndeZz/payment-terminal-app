import { NextApiRequest, NextApiResponse } from 'next';
import { mocks } from '../../../mocks/mocks';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const randomValue = Math.random();
      if (randomValue <= 0.1) {
        return res.status(503).end();
      }
      if (mocks.length <= 0) {
        return res.status(404).end();
      }
      return res.status(200).json(mocks);

    case 'POST':
      const { title, logo } = req.body;
      const newOperator = {
        id: Date.now(),
        title: title,
        logo: logo,
      };
      mocks.push(newOperator);
      return res.status(201).json(newOperator);

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
