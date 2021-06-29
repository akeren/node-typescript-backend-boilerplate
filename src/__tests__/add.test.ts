import add from '@src/math/add';

describe('add two numbers and return the sum', () => {
  it('should pass', () => {
    expect(add(1, 2)).toBe(3);
  });
});
