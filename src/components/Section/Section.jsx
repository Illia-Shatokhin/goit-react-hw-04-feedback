import css from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title = '', children }) => {
  return (
    <div>
      <p className={css.header}>{title}</p>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
