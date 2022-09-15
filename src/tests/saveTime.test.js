import { SaveCteatedTime, SavedTime } from '../components/utils/saveTime';

test('SaveTime', () => {
  const date = new Date();
  SaveCteatedTime(date.toISOString());
  expect(SavedTime()).toBe('a few seconds ago');
});
