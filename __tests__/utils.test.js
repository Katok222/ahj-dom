import { getRandomIndex, getNextIndex } from '../src/js/utils';

test('getRandomIndex returns value from 0 to max - 1', () => {
  const result = getRandomIndex(16);

  expect(result).toBeGreaterThanOrEqual(0);
  expect(result).toBeLessThan(16);
});

test('getNextIndex does not return current index', () => {
  for (let i = 0; i < 50; i += 1) {
    const result = getNextIndex(16, 5);
    expect(result).not.toBe(5);
  }
});

test('getNextIndex returns value from 0 to max - 1', () => {
  for (let i = 0; i < 50; i += 1) {
    const result = getNextIndex(16, 5);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThan(16);
  }
});
