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

const majorScaleFormula = 'wwhwww'; // final half step is implicit

export const getScaleValuesIndexedToC = scaleFormula => (noteName) => {
  const noteValue = getNoteValueIndexedToC(noteName);
  const scaleNoteValues = scaleFormula
    .split('')
    .reduce((acc, cur, idx) => {
      let stepIncrement = 0;
      switch (cur.toLowerCase()) {
        case 'h':
           stepIncrement = 1;
           break;
        case 'w':
           stepIncrement = 2;
           break;
        default:
          throw new TypeError('Scale formula steps should match "w" or "h" (case-insensitive)');
      }
      acc.push(acc[idx] + stepIncrement);
      return acc;
    }, [noteValue])
    .map(step => step % 12); // limit to 0-11 reckoning
  return scaleNoteValues;
};
export const getMajorScaleValuesIndexedToC = getScaleValuesIndexedToC(majorScaleFormula);

export const getTriadValuesFromScaleStep = scale => step => { // zero-indexed
  const scaleLength = scale.length
  return [
    scale[step],
    scale[(step + 2) % scaleLength],
    scale[(step + 4) % scaleLength]
  ];
};