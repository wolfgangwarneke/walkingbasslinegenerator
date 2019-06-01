import {
  isPitchWithinBassRange,
  LOWER_BOUNDING_PITCH,
  UPPER_BOUNDING_PITCH
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