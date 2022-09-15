import Cookies from 'js-cookie';
import { formatDate } from './formatDate';

export const SaveCteatedTime = (date) => {
  if (date.length > 0) {
    Cookies.set('sourceCreated', date, { expires: 1 });
  }
};

export const SavedTime = () => {
  const time = Cookies.get('sourceCreated');

  return formatDate(time);
};
