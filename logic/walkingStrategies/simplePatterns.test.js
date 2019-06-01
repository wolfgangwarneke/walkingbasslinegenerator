import { getSequenceByCollectionAndPattern } from './simplePatterns';

// should sequence collections of any type
test(`['C', 'E', 'G'] with pattern [0, 1, 2, 1] should be ['C', 'E', 'G', 'E']`, () => {
  const collection = ['C', 'E', 'G'];
  const pattern = [0, 1, 2, 1];
  const expected = ['C', 'E', 'G', 'E'];
  expect(getSequenceByCollectionAndPattern(collection, pattern)).toEqual(expect.arrayContaining(expected));
});
test(`['C2', 'E1', 'G1'] with pattern [0, 1, 2, 1] should be ['C2', 'E1', 'G1', 'E1']`, () => {
  const collection = ['C2', 'E1', 'G1'];
  const pattern = [0, 1, 2, 1];
  const expected = ['C2', 'E1', 'G1', 'E1'];
  expect(getSequenceByCollectionAndPattern(collection, pattern)).toEqual(expect.arrayContaining(expected));
});
test(`['C', 'D', 'E'] with pattern [0, 1, 2, 1] should be ['C', 'D', 'E', 'D']`, () => {
  const collection = ['C', 'D', 'E'];
  const pattern = [0, 1, 2, 1];
  const expected = ['C', 'D', 'E', 'D'];
  expect(getSequenceByCollectionAndPattern(collection, pattern)).toEqual(expect.arrayContaining(expected));
});
test(`[0, 7, 10] with pattern [0, 1, 2, 1] should be [0, 7, 10, 7]`, () => {
  const collection = [0, 7, 10];
  const pattern = [0, 1, 2, 1];
  const expected = [0, 7, 10, 7];
  expect(getSequenceByCollectionAndPattern(collection, pattern)).toEqual(expect.arrayContaining(expected));
});