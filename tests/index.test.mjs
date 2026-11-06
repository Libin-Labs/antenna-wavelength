import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('light speed reference', () => {
  assert.equal(api.frequencyToWavelength(299792458), 1);
  assert.equal(api.wavelengthToFrequency(1), 299792458);
});
test('quarter wavelength', () => {
  assert.equal(api.elementLength(299792458), 0.25);
});
test('velocity factor', () => {
  assert.equal(api.frequencyToWavelength(299792458, 0.66), 0.66);
});
test('invalid positive domains', () => {
  assert.throws(() => api.frequencyToWavelength(0));
  assert.throws(() => api.wavelengthToFrequency(-1));
  assert.throws(() => api.elementLength(100, 0));
});
test('invalid factors and overflow', () => {
  assert.throws(() => api.frequencyToWavelength(100, 1.1));
  assert.throws(() => api.frequencyToWavelength(Number.MIN_VALUE));
  assert.throws(() => api.elementLength(100, 11));
});
test('independent proportional law', () => {
  for (let f = 1e6; f <= 20e6; f += 1e6) {
    assert.ok(Math.abs(api.frequencyToWavelength(f) * f - 299792458) < 1e-7);
    assert.equal(api.elementLength(f, 0.5), api.frequencyToWavelength(f) / 2);
  }
});
