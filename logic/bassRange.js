import { getNoteValueIndexedToC } from './scaleNotes';

// glossary note: 'pitch' refers to scientific pitch notation,
// should be string of length 2 formatted letter note name + number octave

export const LOWER_BOUNDING_PITCH = 'E1'; // open E string
export const UPPER_BOUNDING_PITCH = 'G3'; // octave on G string

const noteComparator = (testPitch, comparePitch) => {
  if (testPitch === comparePitch) {
    return 0;
  }
  // if octaves are equal, compare note values
  if (testPitch[1] === comparePitch[1]) {
    return getNoteValueIndexedToC(testPitch[0]) > getNoteValueIndexedToC(comparePitch[0]) ? 1 : -1;
  }
  // if octaves are not equal, compare octaves
  return testPitch[1] > comparePitch[1] ? 1 : -1;
};

export const isPitchWithinBassRange = (pitch) => {
  return noteComparator(pitch, LOWER_BOUNDING_PITCH) !== -1 && noteComparator(pitch, UPPER_BOUNDING_PITCH) !== 1;
}
