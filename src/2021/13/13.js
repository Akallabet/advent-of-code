import {
  addIndex,
  filter,
  forEach,
  identity,
  map,
  maxBy,
  pipe,
  reduce,
  replace,
  sort,
  split,
  tap,
} from 'ramda';
const mapI = addIndex(map);

const parseCoordinates = pipe(map(split(',')), map(map(Number)));
const parseFoldingInstr = pipe(
  map(replace('fold along ', '')),
  map(split('=')),
  map(([ax, coord]) => [ax, Number(coord)])
);
const splitCoordinatesFromInstructions = (rows) => {
  const empty = rows.findIndex((i) => i === '');
  return [rows.slice(0, empty), rows.slice(empty + 1)];
};

export const parseInput = pipe(
  split('\n'),
  splitCoordinatesFromInstructions,
  ([points, foldingInstr]) => [parseCoordinates(points), parseFoldingInstr(foldingInstr)]
);

const invertCoord = ([x, y]) => [y, x];
const comparator = ([y1, x1], [y2, x2]) => y1 - y2 || x1 - x2;
const createEmptyPaper = (y, x) =>
  map(() => map(() => 0, [...new Array(x + 1)]), [...new Array(y + 1)]);
const getMaxX = pipe(
  map(([_, x]) => x),
  reduce(maxBy(identity), 0)
);
const createPaper = pipe(map(invertCoord), sort(comparator), (coords) => {
  const paper = createEmptyPaper(coords[coords.length - 1][0], getMaxX(coords));
  forEach(([y, x]) => {
    paper[y][x] = 1;
  }, coords);
  return paper;
});

export const foldOnColumns = (paper) => {
  return mapI((row, y) => {
    return mapI((_, x) => {
      return paper[y][x] || paper[y][paper[y].length - 1 - x];
    }, row);
  }, createEmptyPaper(paper.length - 1, Math.floor(paper[0].length / 2) - 1));
};

export const foldOnRows = (paper, fold) => {
  // console.log('fold', Math.floor(paper.length / 2));
  return mapI((row, y) => {
    // console.log('bottom', paper.length - 1 - y);
    const cut = paper.length - 1 - y;
    return mapI((_, x) => {
      // console.log(y, x);
      return paper[y][x] || (paper[cut] && paper[cut][x]) || 0;
    }, row);
  }, createEmptyPaper(Math.floor(paper.length / 2) - 1, paper[0].length - 1));
};

const countNumberOfVisibleDots = reduce(
  (tot, row) => tot + filter((point) => point === 1, row).length,
  0
);

export const part1 = pipe(
  parseInput,
  ([coordinates, [[ax, folding]]]) => {
    const foldingFn = ax === 'y' ? foldOnRows : foldOnColumns;
    return foldingFn(coordinates, folding);
  },
  countNumberOfVisibleDots
);

const foldPaper = reduce((paper, [ax, folding]) => {
  // console.log({ y: paper.length, x: paper[0].length }, ax, folding);
  const foldingFn = ax === 'y' ? foldOnRows : foldOnColumns;
  return foldingFn(paper, folding);
});

export const part2 = pipe(
  parseInput,
  ([coordinates, instructions]) => foldPaper(createPaper(coordinates), instructions),
  console.table
);
