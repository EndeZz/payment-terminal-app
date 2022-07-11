import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'POST':
      return res.status(201).json({ message: 'Баланс успешно пополнен!' });

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
