import { 
  getNoteValueIndexedToC,
  getMajorScaleValuesIndexedToC,
  getTriadValuesFromScaleStep
} from './scaleNotes';

// GET NOTE VALUE INDEXED TO C
// Note values
test('"C" should be 0 relative to C.', () => {
  expect(getNoteValueIndexedToC('C')).toBe(0);
});
test('"c" should be 0 relative to C.', () => {
  expect(getNoteValueIndexedToC('C')).toBe(0);
});
test('"b" should be 11 relative to C.', () => {
  expect(getNoteValueIndexedToC('b')).toBe(11);
});
test('"bb" should be 10 relative to C.', () => {
  expect(getNoteValueIndexedToC('bb')).toBe(10);
});
test('"A#" should be 10 relative to C.', () => {
  expect(getNoteValueIndexedToC('A#')).toBe(10);
});

// support whitespace
test('" c    " should be 0 relative to C', () => {
  expect(getNoteValueIndexedToC(' c    ')).toBe(0);
});

// Type Errors
test('"banana" should throw a type error.', () => {
  expect(() => getNoteValueIndexedToC('banana')).toThrow(TypeError);
});
test('Empty string should throw a type error.', () => {
  expect(() => getNoteValueIndexedToC('')).toThrow(TypeError);
});
test('Other types should throw a type error.', () => {
  expect(() => getNoteValueIndexedToC({})).toThrow(TypeError);
  expect(() => getNoteValueIndexedToC([])).toThrow(TypeError);
  expect(() => getNoteValueIndexedToC(100)).toThrow(TypeError);
  expect(() => getNoteValueIndexedToC(true)).toThrow(TypeError);
});

// GET MAJOR SCALE VALUES INDEXED TO C
test('"C" should return an array of [0, 2, 4, 5, 7, 9, 11]', () => {
  const expected = [0, 2, 4, 5, 7, 9, 11];
  expect(getMajorScaleValuesIndexedToC('C')).toEqual(expect.arrayContaining(expected));
})
test('"c#" should return an array of [1, 3, 5, 6, 8, 10, 0]', () => {
  const expected = [1, 3, 5, 6, 8, 10, 0];
  expect(getMajorScaleValuesIndexedToC('c#')).toEqual(expect.arrayContaining(expected));
})

// GET TRIAD VALUES FROM SCALE STEP
test('C major scale with step 0 should return [0, 4, 7] (C major triad)', () => {
  const cMajorValues = getMajorScaleValuesIndexedToC('C');
  const expected = [0, 4, 7];
  const step = 0;
  expect(getTriadValuesFromScaleStep(cMajorValues)(step)).toEqual(expect.arrayContaining(expected));
});
test('C major scale with step 1 should return [2, 5, 9] (D minor triad)', () => {
  const cMajorValues = getMajorScaleValuesIndexedToC('C');
  const expected = [2, 5, 9];
  const step = 1;
  expect(getTriadValuesFromScaleStep(cMajorValues)(step)).toEqual(expect.arrayContaining(expected));
});
test('C major scale with step 6 should return [11, 3, 5] (b dim triad)', () => {
  const cMajorValues = getMajorScaleValuesIndexedToC('C');
  const expected = [11, 2, 5];
  const step = 6
  expect(getTriadValuesFromScaleStep(cMajorValues)(step)).toEqual(expect.arrayContaining(expected));
});