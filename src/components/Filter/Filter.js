import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filterState }) => {
  return (
    <label htmlFor="filter" className={css.filterLabel}>
      Filter contacts by name
      <input
        className={css.filterInput}
        type="search"
        name="q"
        id="filter"
        onChange={filterState}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  filterState: PropTypes.func,
};

export default Filter;
