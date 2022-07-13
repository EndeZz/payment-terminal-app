import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { IOperators } from '../../utils/types/IOperators';
import {
  BoardWrapper,
  BoardList,
  BoardItem,
  BoardLink,
  BoardImg,
  BoardTitle,
} from './Board.styled';

interface BoardProps {
  operators: IOperators[];
}

export const Board: FC<BoardProps> = ({ operators }) => (
  <BoardWrapper>
    <BoardList>
      {operators &&
        operators.map((operator) => (
          <BoardItem key={operator.id}>
            <Link href={`/operators/${operator.id}`} passHref>
              <BoardLink>
                <BoardImg>
                  <Image
                    src={operator.logo}
                    alt={operator.title}
                    width={60}
                    height={60}
                  />
                </BoardImg>
                <BoardTitle>{operator.title}</BoardTitle>
              </BoardLink>
            </Link>
          </BoardItem>
        ))}
    </BoardList>
  </BoardWrapper>
);

export default Board;
