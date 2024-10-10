import moment from 'moment';

const validateDate = ({ date }: { date: string }) => {
  return moment(date, 'DD-MM-YYYY').isSameOrAfter(
    moment(new Date(), 'DD-MM-YYYY', 'days')
  );
};

export default validateDate;