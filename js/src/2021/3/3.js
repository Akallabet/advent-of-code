import { filter, join, map, pipe, reduce, split, product } from 'ramda';

const parseInput = pipe(map(split('')), map(map(Number)));
const fromArrayOfBitsToInt = pipe(
  map(join('')),
  map((b) => parseInt(b, 2))
);

const commonBits = (common, uncommon) => (nums) =>
  pipe(
    ([first, ...nums]) => reduce((total, num) => total.map((n, i) => n + num[i]), first, nums),
    map((n) => (n > nums.length / 2 || n === nums.length / 2 ? common : uncommon))
  )(nums);

const mostCommonBits = commonBits(1, 0);
const leastCommonBits = commonBits(0, 1);

const powerConsumption = (nums) =>
  pipe(
    (nums) => [mostCommonBits(nums), leastCommonBits(nums)],
    fromArrayOfBitsToInt,
    product
  )(nums);

const calcRating = (commonBitsFn) => (nums) => {
  const calcRatingRec = (nums, i) => {
    if (nums.length === 1 || i === 12) return nums[0];
    const commonBits = commonBitsFn(nums);
    return calcRatingRec(
      filter((num) => num[i] === commonBits[i], nums),
      i + 1
    );
  };
  return calcRatingRec(nums, 0);
};

const oxigenGeneratorRating = calcRating(mostCommonBits);
const CO2ScrubberRating = calcRating(leastCommonBits);

const lifeSupportRating = pipe(
  (nums) => [oxigenGeneratorRating(nums), CO2ScrubberRating(nums)],
  fromArrayOfBitsToInt,
  product
);

export const part1 = pipe(parseInput, powerConsumption);
export const part2 = pipe(parseInput, lifeSupportRating);
