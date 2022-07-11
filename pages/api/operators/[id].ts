import { NextApiRequest, NextApiResponse } from 'next';
import { getOperatorById } from '../../../utils/getOperatorById';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      const { id } = req.query;
      const currentOperator = getOperatorById(+id);
      if (currentOperator) {
        return res.status(200).json(currentOperator);
      } else {
        return res.status(404).end();
      }

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
