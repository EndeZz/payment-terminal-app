import styled from 'styled-components';

const BoardWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: auto;
`;
const BoardList = styled.ul`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
`;

const BoardItem = styled.li``;

const BoardImg = styled.div`
  border-radius: 50%;
  overflow: hidden;
  height: 60px;
  width: 60px;
`;

const BoardLink = styled.a`
  display: flex;
  align-items: center;
  gap: 20px;
  border-radius: 15px;
  padding: 12px;
  border: 2px solid transparent;

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
`;

const BoardTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
`;

export {
  BoardWrapper,
  BoardList,
  BoardItem,
  BoardImg,
  BoardLink,
  BoardTitle,
};
