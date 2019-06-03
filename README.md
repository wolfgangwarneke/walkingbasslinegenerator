# Walking Bassline Generator

Generate walking basslines for chord progression.

## Project Outline

This project is projected to be completed in four stages:
- musical grammar types and functional helpers
- stylistic randomization and composition of basslines
- user interface
- demo audio synthesis

Current status: first stage - Building-block helpers are in complete for basic note systems and relation to the bass instrument range. A messy implentation which outputs triads over a 12-bar blues has been achieved, but will need to be redesigned.

## Glossary

### Note name
ex. 'C'
The simple name of a note with no consideration of pitch or octave.

### Note value (relative to C)
ex. 11
For internal logic we can keep track of various patterns numerically by converting *note names* into *note values*. Values are determined by how many semitones a note by a name is referenced above C. C is 0 since C is zero steps above C.
| Note | Semitones Above C |
| ---- | ---- |
| C | 0 |
| C# or Db | 1 |
| D | 2 |
| D# or Eb | 3 |
| E | 4 |
| F | 5 |
| F# or Gb | 6 |
| G | 7 |
| G# or Ab | 8 |
| A | 9 |
| A# or Bb | 10 |
| B | 11 |

### Pitch
ex. 'C2'
Pitch comes from 'Scientific Pitch Notation' (SPN) and will be utilized for the output of the generator logic. Use of pitch will make the UI translation to sheet music more manageable.