import { expect, it, describe } from 'vitest';
import { add } from './add';

describe('add', () => {
  it('should work', () => {
    expect(add(1, 2)).toEqual(3);
  });
});
