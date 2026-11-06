function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function velocity(v: number): number {
  return finite(v, Number.MIN_VALUE, 1);
}
export function frequencyToWavelength(hertz: number, velocityFactor = 1): number {
  return finite(
    (299792458 * velocity(velocityFactor)) / finite(hertz, Number.MIN_VALUE),
    Number.MIN_VALUE,
  );
}
export function wavelengthToFrequency(metres: number, velocityFactor = 1): number {
  return finite(
    (299792458 * velocity(velocityFactor)) / finite(metres, Number.MIN_VALUE),
    Number.MIN_VALUE,
  );
}
export function elementLength(hertz: number, fraction = 0.25, velocityFactor = 1): number {
  return finite(
    frequencyToWavelength(hertz, velocityFactor) * finite(fraction, Number.MIN_VALUE, 10),
    Number.MIN_VALUE,
  );
}
