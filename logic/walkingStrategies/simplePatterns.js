import getTri from '../scaleNotes';

export const simpleThreeNotePatterns = [
  [0, 1, 2, 1],
  [0, 2, 1, 2],
  [0, 0, 1, 2],
  [0, 0, 2, 1]
];

export const getSequenceByCollectionAndPattern = (collection, pattern) => pattern.map(index => collection[index]);