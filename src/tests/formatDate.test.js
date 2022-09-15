import { formatDate } from '../components/utils/formatDate';

describe('formatDate', () => {
  it('should return "a few seconds ago" when the date is less than 1 minute ago', () => {
    const date = new Date();
    const result = formatDate(date);
    expect(result).toBe('a few seconds ago');
  });

  it('should return "a day ago" when the date is less than 24 hours ago', () => {
    const date = new Date();
    date.setHours(date.getHours() - 23);
    const result = formatDate(date);
    expect(result).toBe('a day ago');
  });

  it('should return "a month ago" format changes to DD/MM/YYYY', () => {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const result = formatDate(date);
    expect(result).not.toBe('a month ago');
  });
});
