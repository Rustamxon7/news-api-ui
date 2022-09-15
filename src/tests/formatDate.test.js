import { formatDate } from '../components/utils/formatDate';

const date = new Date();

test('formatDate', () => {
  expect(formatDate('2020-01-01T00:00:00Z')).toBe('01 Jan 2020');
  expect(formatDate(date)).toBe('a few seconds ago');
});
