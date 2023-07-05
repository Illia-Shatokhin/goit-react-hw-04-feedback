import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good = {},
  neutral = {},
  bad = {},
  total = {},
  positivePercentage = {},
}) => {
  return (
    <>
      <p className={css.statisticsText}>Good: {good}</p>
      <p className={css.statisticsText}>Neutral: {neutral}</p>
      <p className={css.statisticsText}>Bad: {bad}</p>
      <p className={css.statisticsText}>Total: {total}</p>
      <p className={css.statisticsText}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
