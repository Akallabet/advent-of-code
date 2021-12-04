import { filter, map, pipe, reduce, split, sum, transpose } from 'ramda';

const buildBingoBoards = pipe(
  reduce((boards, line) => {
    if (line === '') return [...boards, []];
    return [...boards.slice(0, boards.length - 1), [...boards[boards.length - 1], line]];
  }, []),
  map(
    map(
      pipe(
        split(' '),
        filter((n) => n !== ''),
        map(Number)
      )
    )
  )
);

const isRowComplete = reduce((isComplete, num) => isComplete && num === 'mark', true);
const hasOneCompleteRow = ([row, ...rows]) => {
  if (!row) return false;
  if (isRowComplete(row)) return true;
  return hasOneCompleteRow(rows);
};

const checkForWinner = ([board, ...boards]) => {
  if (!board) return false;
  if (hasOneCompleteRow(board) || hasOneCompleteRow(transpose(board))) return board;
  return checkForWinner(boards);
};
const markDrawnNumber = (draw) => map(map(map((n) => (n === draw ? 'mark' : n))));

const getSumOfUnmarkedNumbers = pipe(
  map(
    pipe(
      map((num) => (num === 'mark' ? 0 : num)),
      sum
    )
  ),
  sum
);

const playBingo = ([[draw, ...draws], boards]) => {
  const markedBoards = markDrawnNumber(draw)(boards);
  const winner = checkForWinner(markedBoards);
  if (winner) return [draw, winner];
  if (draws.length === 0) return false;
  return playBingo([draws, markedBoards]);
};

const buildBingo = ([draws, ...lines]) => [map(Number, split(',', draws)), buildBingoBoards(lines)];
const calcFinalScore = ([draw, winner]) => draw * getSumOfUnmarkedNumbers(winner);

export const part1 = pipe(split('\n'), buildBingo, playBingo, calcFinalScore);
