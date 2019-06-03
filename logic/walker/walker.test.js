import { createTriadicBasslineForMeasure, walker } from './walker';
import { getSequenceByCollectionAndPattern } from '../walkingStrategies/simplePatterns';
import { getMajorScaleValuesIndexedToC } from '../scaleNotes';

// C major ii V I vi with 1-3-5-3 pattern
test('Expect d minor 1-3-5-3 pattern.', () => {
  const cMajorValues = getMajorScaleValuesIndexedToC('C');
  const step = 1;
  const simpleTriad = (collection) => getSequenceByCollectionAndPattern(collection, [0, 1, 2, 1]);
  const expected = [2, 5, 9, 5];
  expect(createTriadicBasslineForMeasure(cMajorValues, step, simpleTriad)).toEqual(expect.arrayContaining(expected));
});
test('Expect G major 1-3-5-3 pattern.', () => {
  const cMajorValues = getMajorScaleValuesIndexedToC('C');
  const step = 4;
  const simpleTriad = (collection) => getSequenceByCollectionAndPattern(collection, [0, 1, 2, 1]);
  const expected = [7, 11, 2, 11];
  expect(createTriadicBasslineForMeasure(cMajorValues, step, simpleTriad)).toEqual(expect.arrayContaining(expected));
});
test('Expect C major 1-3-5-3 pattern.', () => {
  const cMajorValues = getMajorScaleValuesIndexedToC('C');
  const step = 0;
  const simpleTriad = (collection) => getSequenceByCollectionAndPattern(collection, [0, 1, 2, 1]);
  const expected = [0, 4, 7, 4];
  expect(createTriadicBasslineForMeasure(cMajorValues, step, simpleTriad)).toEqual(expect.arrayContaining(expected));
});
test('Expect a minor 1-3-5-3 pattern.', () => {
  const cMajorValues = getMajorScaleValuesIndexedToC('C');
  const step = 5;
  const simpleTriad = (collection) => getSequenceByCollectionAndPattern(collection, [0, 1, 2, 1]);
  const expected = [9, 0, 4, 0];
  expect(createTriadicBasslineForMeasure(cMajorValues, step, simpleTriad)).toEqual(expect.arrayContaining(expected));
});

// !!! TEST OVERSIMPLIFIED IMPLEMENTATION !!! this will be irrelevant after further development
test('Expect a triadic sequence with lowest possible notes.', () => {
  const twelveBarBlues = ['C', 'F', 'C', 'C', 'F', 'F', 'C', 'C', 'G', 'F', 'C', 'G'];
  const expectedMeasuresOfPitches = [
    ['C2', 'E1', 'G1', 'E1'],
    ['F1', 'A1', 'C2', 'A1'],
    ['C2', 'E1', 'G1', 'E1'],
    ['C2', 'E1', 'G1', 'E1'],
    ['F1', 'A1', 'C2', 'A1'],
    ['F1', 'A1', 'C2', 'A1'],
    ['C2', 'E1', 'G1', 'E1'],
    ['C2', 'E1', 'G1', 'E1'],
    ['G1', 'B1', 'D2', 'B1'],
    ['F1', 'A1', 'C2', 'A1'],
    ['C2', 'E1', 'G1', 'E1'],
    ['G1', 'B1', 'D2', 'B1']
  ];
  expect(walker(twelveBarBlues)).toEqual(expect.arrayContaining(expectedMeasuresOfPitches));
  console.log('CHORD INPUT:');
  console.log(twelveBarBlues.join(' '));
  console.log('PITCH OUTPUT');
  console.table(walker(twelveBarBlues));
})