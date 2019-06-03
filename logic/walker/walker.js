import { getTriadValuesFromScaleStep, getMajorScaleValuesIndexedToC, translateNoteValueToNoteName } from '../scaleNotes';
import { getLowestPitchWithinBassRangeByNoteName } from '../bassRange';
import { getSequenceByCollectionAndPattern } from '../walkingStrategies/simplePatterns';

export const createTriadicBasslineForMeasure = (chordScale, scaleStep, strategy) => {
  const triad = getTriadValuesFromScaleStep(chordScale)(scaleStep);
  const measureNotes = strategy(triad);
  return measureNotes;
};

// main API, input: chordprogression array / output: pitch array array
// IN PROGRESS: only supports major scales... ex. C, F, G
export const walker = (chordProgression) => {
  const simpleTriadStrategy = (collection) => getSequenceByCollectionAndPattern(collection, [0, 1, 2, 1]);
  return chordProgression
    .map(chordName => getMajorScaleValuesIndexedToC(chordName))
    .map(chordScale => createTriadicBasslineForMeasure(chordScale, 0, simpleTriadStrategy))
    .map(measureOfNoteValues => measureOfNoteValues
      .map(translateNoteValueToNoteName)
      .map(getLowestPitchWithinBassRangeByNoteName)
    );
};