import {
  isPitchWithinBassRange,
  LOWER_BOUNDING_PITCH,
  UPPER_BOUNDING_PITCH,
  getPitchesWithinBassRangeByNoteName,
  getLowestPitchWithinBassRangeByNoteName
} from './bassRange';

// test lower range
test(`"${LOWER_BOUNDING_PITCH}" should be false (is not within range)`, () => {
  expect(isPitchWithinBassRange(LOWER_BOUNDING_PITCH)).toBe(true);
});
// test upper range
test(`"${UPPER_BOUNDING_PITCH}" should be false (is not within range)`, () => {
  expect(isPitchWithinBassRange(UPPER_BOUNDING_PITCH)).toBe(true);
});
// test many octaves of arbitrary note
test('"G0" should be false (is not within range)', () => {
  expect(isPitchWithinBassRange('G0')).toBe(false);
});
test('"G1" should be true (is within range)', () => {
  expect(isPitchWithinBassRange('G1')).toBe(true);
});
test('"G2" should be false (is within range)', () => {
  expect(isPitchWithinBassRange('G2')).toBe(true);
});
test('"G3" should be false (is within range)', () => {
  expect(isPitchWithinBassRange('G3')).toBe(true);
});
test('"G4" should be false (is not within range)', () => {
  expect(isPitchWithinBassRange('G4')).toBe(false);
});

// get all pitches of note within bass range
test(`"E" should return an array of ['E1', 'E2', 'E3']`, () => {
  const expected = ['E1', 'E2', 'E3'];
  expect(getPitchesWithinBassRangeByNoteName('E')).toEqual(expect.arrayContaining(expected));
})
test(`"C" should return an array of ['C2', 'C3']`, () => {
  const expected = ['C2', 'C3'];
  expect(getPitchesWithinBassRangeByNoteName('C')).toEqual(expect.arrayContaining(expected));
})

// get lowest pitches of note within bass range
test('"E" should return "E1"', () => {
  expect(getLowestPitchWithinBassRangeByNoteName('E')).toEqual('E1');
});
test('"C" should return "C2"', () => {
  expect(getLowestPitchWithinBassRangeByNoteName('C')).toEqual('C2');
});
test('"Bb" should return "Bb1"', () => {
  expect(getLowestPitchWithinBassRangeByNoteName('Bb')).toEqual('Bb1');
});
test('"C#" should return "C#2"', () => {
  expect(getLowestPitchWithinBassRangeByNoteName('C#')).toEqual('C#2');
});