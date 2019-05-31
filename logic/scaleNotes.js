const cIndexedNoteMap = [
  /^c$/i,
  /^c#|db/i,
  /^d$/i,
  /^d#|eb/i,
  /^e$/i,
  /^f$/i,
  /^f#|gb/i,
  /^g$/i,
  /^g#|ab/i,
  /^a$/i,
  /^a#|bb/i,
  /^b$/i
];

export const getNoteValueIndexedToC = (noteName) => {
  const valueIndexedToC = cIndexedNoteMap.findIndex(noteRegExp => noteRegExp.test(noteName.trim()));
  if (valueIndexedToC < 0) {
    throw new TypeError(`${noteName} is not a recognized note name.`);
  }
  return valueIndexedToC;
};
