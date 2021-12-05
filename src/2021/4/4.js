import { filter, find, map, not, pipe, reduce, split, sum, transpose } from 'ramda';

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

const isWinnerBoard = (board) => hasOneCompleteRow(board) || hasOneCompleteRow(transpose(board));

const playBingo = ([boards, [draw, ...draws]], limit) => {
  const markedBoards = markDrawnNumber(draw)(boards);
  const winner = find(isWinnerBoard, markedBoards);
  const newBoards = filter(pipe(isWinnerBoard, not), markedBoards);

  if (newBoards.length === limit) return [winner, draw];
  return playBingo([newBoards, draws], limit);
};

const buildBingo = ([draws, ...lines]) => [buildBingoBoards(lines), map(Number, split(',', draws))];
const calcFinalScore = ([winner, draw]) => draw * getSumOfUnmarkedNumbers(winner);

const playBingoFirstWinner = ([board, draw]) => playBingo([board, draw], board.length - 1);
const playBingoToLetSquidWin = ([board, draw]) => playBingo([board, draw], 0);

export const part1 = pipe(split('\n'), buildBingo, playBingoFirstWinner, calcFinalScore);
export const part2 = pipe(split('\n'), buildBingo, playBingoToLetSquidWin, calcFinalScore);
