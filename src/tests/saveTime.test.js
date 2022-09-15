import { SaveCteatedTime, SavedTime } from '../components/utils/saveTime';

describe('SaveTime', () => {
  it('should save the time', () => {
    const date = new Date();
    SaveCteatedTime(date.toISOString());
    expect(SavedTime()).toBe('a few seconds ago');
  });
});
