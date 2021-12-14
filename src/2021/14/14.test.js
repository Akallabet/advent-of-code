import {
  elementsOccurrence,
  parseInput,
  part1,
  polymerization,
  polymerizationSteps,
  prepareForPolymerization,
} from './14';
import input from './input';

const example = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;

describe('Utilities', () => {
  it('Parse input', () => {
    expect(parseInput(example)).toEqual([
      'NNCB',
      {
        CH: 'B',
        HH: 'N',
        CB: 'H',
        NH: 'C',
        HB: 'C',
        HC: 'B',
        HN: 'C',
        NN: 'C',
        BH: 'H',
        NC: 'B',
        NB: 'B',
        BN: 'B',
        BB: 'N',
        BC: 'B',
        CC: 'N',
        CN: 'C',
      },
    ]);
  });
  it('prepare for polymerization', () => {
    expect(prepareForPolymerization('NNCB')).toEqual(['NN', 'NC', 'CB', 'B']);
  });

  it('polymerization', () => {
    expect(polymerization(...parseInput(example))).toEqual('NCNBCHB');
  });
  it('polymerization steps', () => {
    expect(polymerizationSteps(parseInput(example), 4)).toEqual(
      'NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB'
    );
  });
  it('elements occurrence', () => {
    const polymer = polymerizationSteps(parseInput(example), 10);
    expect(polymer.length).toEqual(3073);
    const occurrences = elementsOccurrence(polymer);
    expect(occurrences.B).toEqual(1749);
  });
});

describe('Day 14 - Extended Polymerization', () => {
  it('Part 1 - Example', () => {
    expect(part1(10)(example)).toEqual(1588);
  });
  it('Part 1', () => {
    expect(part1(10)(input)).toEqual(2621);
  });
});
