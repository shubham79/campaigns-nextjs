import moment from 'moment';

export function calculateTimeDiff(createdOn) {
  var dateofvisit = moment(createdOn);
  var today = moment();
  const diff = dateofvisit.diff(today, 'days');
  return diff > 0 ? `${diff} days ahead` : `${Math.abs(diff)} days ago`;
}
