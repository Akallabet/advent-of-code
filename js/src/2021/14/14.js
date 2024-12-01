import {
  map,
  addIndex,
  pipe,
  reduce,
  split,
  slice,
  dropLast,
  values,
  sortBy,
  identity,
} from 'ramda';
const mapI = addIndex(map);

const buildInsertionRules = pipe(
  map(split(' -> ')),
  reduce((rules, [key, value]) => ({ ...rules, [key]: value }), {})
);
export const parseInput = pipe(split('\n'), (lines) => [
  lines[0],
  buildInsertionRules(lines.slice(2)),
]);

export const prepareForPolymerization = (polymer) =>
  pipe(
    split(''),
    mapI((element, i) => `${element}${polymer[i + 1] || ''}`)
  )(polymer);

export const polymerization = (polymer, insertionRules) =>
  reduce(
    (newPolymer, pair) => {
      return `${newPolymer}${pair.length === 1 ? pair : `${pair[0]}${insertionRules[pair]}`}`;
    },
    '',
    prepareForPolymerization(polymer)
  );

export const polymerizationSteps = ([polymer, insertionRules], steps = 1, step = 0) => {
  if (step === steps) return polymer;
  return polymerizationSteps(
    [polymerization(polymer, insertionRules), insertionRules],
    steps,
    step + 1
  );
};

export const elementsOccurrence = pipe(
  split(''),
  reduce(
    (ocurrences, element) => ({
      ...ocurrences,
      [element]: 1 + (ocurrences[element] || 0),
    }),
    {}
  )
);

export const part1 = (steps) =>
  pipe(
    parseInput,
    (input) => polymerizationSteps(input, steps),
    elementsOccurrence,
    values,
    sortBy(identity),
    (occurrences) => occurrences[occurrences.length - 1] - occurrences[0]
  );
