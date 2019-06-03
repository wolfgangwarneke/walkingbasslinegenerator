import { getNoteValueIndexedToC } from './scaleNotes';

// glossary note: 'pitch' refers to scientific pitch notation,
// should be string of length 2 formatted letter note name + number octave

export const LOWER_BOUNDING_PITCH = 'E1'; // open E string
export const UPPER_BOUNDING_PITCH = 'G3'; // octave on G string

const pitchComparator = (testPitch, comparePitch) => {
  if (testPitch === comparePitch) {
    return 0;
  }
  // if octaves are equal, compare note values
  if (testPitch[testPitch.length - 1] === comparePitch[comparePitch.length - 1]) {
    return getNoteValueIndexedToC(testPitch.replace(/\d/, '')) > getNoteValueIndexedToC(comparePitch.replace(/\d/, '')) ? 1 : -1;
  }
  // if octaves are not equal, compare octaves
  return testPitch[testPitch.length - 1] > comparePitch[comparePitch.length - 1] ? 1 : -1;
};

export const isPitchWithinBassRange = (pitch) => {
  return pitchComparator(pitch, LOWER_BOUNDING_PITCH) !== -1 && pitchComparator(pitch, UPPER_BOUNDING_PITCH) !== 1;
}

export const getPitchesWithinBassRangeByNoteName = (noteName) => {
  const pitches = [];
  let octave = LOWER_BOUNDING_PITCH[1];
  do {
    const pitch = `${noteName}${octave}`;
    if (isPitchWithinBassRange(pitch)) {
      pitches.push(pitch);
    }
  } while (++octave <= parseInt(UPPER_BOUNDING_PITCH[1]));
  return pitches;
}

export const getLowestPitchWithinBassRangeByNoteName = (noteName) => getPitchesWithinBassRangeByNoteName(noteName).shift();
