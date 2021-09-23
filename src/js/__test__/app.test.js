import ErrorRepository from '../app';

test('gives a description of the error', () => {
  const err = new ErrorRepository();
  const result = err.translate(400);
  expect(result).toBe('Bad Request');
});

test('no error in the repository', () => {
  const err = new ErrorRepository();
  const result = err.translate(52);
  expect(result).toBe('Unknown error');
});
