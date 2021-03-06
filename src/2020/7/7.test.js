import { part1, part2 } from './7'
import input from './input'

const example = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

describe('Day 7: Handy Haversacks', () => {
  it('Part 1 - Example', () => {
    expect(part1(example.split('\n'))).toEqual(4)
  })
  it('Part 1', () => {
    expect(part1(input.split('\n'))).toEqual(112)
  })
  it('Part 2 - Example', () => {
    expect(part2(example.split('\n'))).toEqual(32)
  })
  it('Part 2', () => {
    expect(part2(input.split('\n'))).toEqual(6260)
  })
})
