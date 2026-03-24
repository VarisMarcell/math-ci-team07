import { describe, it, expect } from 'vitest';
import {
  add,
  subtract,
  multiply,
  divide,
  factorial,
  power,
  average,
  clamp,
  quadratic,
} from './math';

describe('add', () => {
  it('adds two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });
  it('handles negative numbers', () => {
    expect(add(-1, -4)).toBe(-5);
  });
});

describe('subtract', () => {
  it('subtracts two positive numbers', () => {
    expect(subtract(10, 4)).toBe(6);
  });
});

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    expect(multiply(3, 7)).toBe(21);
  });

  it('returns zero when multipliedby zero', () => {
    expect(multiply(5, 0)).toBe(0);
  });
});

describe('divide', () => {
  it('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });
  it('returns null when dividing by zero', () => {
    expect(divide(10, 0)).toBeNull();
  });
});
describe('factorial', () => {
  it('computes factorial of 5', () => {
    expect(factorial(5)).toBe(120);
  });
  it('returns 1 for factorisal of 0', () => {
    expect(factorial(0)).toBe(1);
  });
  it('returns null for negative numbers', () => {
    expect(factorial(-3)).toBeNull();
  });
});

describe('power', () => {
  it('computes power of a number', () => {
    expect(power(2, 3)).toBe(8);
  });
  it('handles zero exponent', () => {
    expect(power(5, 0)).toBe(1);
  });
});

describe('average', () => {
  it('computes average of an array of numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });
  it('returns null for an empty array', () => {
    expect(average([])).toBeNull();
  });
});

describe('clamp', () => {
  it('clamps a value within a range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });
  it('clamps a value below the minimum', () => {
    expect(clamp(-3, 0, 100)).toBe(0);
  });
  it('clamps a value above the maximum', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });
});

describe('quadratic', () => {
  it('solves a quadratic equation with real roots', () => {
    expect(quadratic(1, -3, 2)).toEqual([2, 1]);
  });
  it('returns null for equations with no real roots', () => {
    expect(quadratic(1, 0, 1)).toBeNull();
  });
  it('handles repeated roots', () => {
    expect(quadratic(1, -2, 1)).toEqual([1, 1]);
  });
});
