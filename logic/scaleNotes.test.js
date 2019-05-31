import { getNoteValueIndexedToC } from './scaleNotes';

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