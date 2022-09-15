import Moment from 'moment';

export const formatDate = (date) => {
  const now = Moment();
  const postDate = Moment(date);
  const diff = now.diff(postDate, 'hours');
  return diff < 24 ? postDate.fromNow() : postDate.format('DD MMM YYYY');
};
