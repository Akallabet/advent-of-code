import { getSintaxOpenings, part1, part2 } from './10';
import input from './input';

const example = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;

describe('Day 10: Syntax Scoring', () => {
  it('Part 1 - Sintax Error', () => {
    const line = '[[<[([]))<([[{}[[()]]]';
    expect(getSintaxOpenings(line.split(''), 0).error).toEqual(')');
  });
  it('Part 1 - Example', () => {
    expect(part1(example)).toEqual(26397);
  });
  it('Part 1', () => {
    expect(part1(input)).toEqual(323691);
  });
  it('Part 2 - Example', () => {
    expect(part2(example)).toEqual(288957);
  });
  it('Part 2', () => {
    expect(part2(input)).toEqual(2858785164);
  });
});
