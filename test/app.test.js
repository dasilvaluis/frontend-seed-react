import App from '../src/app';

describe('App', () => {
  test('returns a friendly message', () => {
    expect(App()).toMatch(/Welcome/);
  });
});
