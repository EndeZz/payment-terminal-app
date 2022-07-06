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

const Board: FC<BoardProps> = ({ operators }) => (
  <BoardWrapper>
    <BoardList>
      {operators &&
        operators.map((item) => (
          <BoardItem key={item.id}>
            <Link href={`/operators/${item.id}`} passHref>
              <BoardLink>
                <BoardImg>
                  <Image
                    src={item.logo}
                    alt={item.title}
                    width={80}
                    height={80}
                    objectFit="cover"
                  />
                </BoardImg>
                <BoardTitle>{item.title}</BoardTitle>
              </BoardLink>
            </Link>
          </BoardItem>
        ))}
    </BoardList>
  </BoardWrapper>
);

export default Board;
