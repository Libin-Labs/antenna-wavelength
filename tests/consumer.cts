import { frequencyToWavelength, elementLength } from '@lp-labs/antenna-wavelength';
if (frequencyToWavelength(299792458) !== 1 || elementLength(299792458) !== 0.25)
  throw new Error('Wavelength');
// @ts-expect-error invalid argument must be rejected by declarations
elementLength('100');
