import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlicer';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  return (
    <label htmlFor="filter" className={css.filterLabel}>
      Filter contacts by name
      <input
        className={css.filterInput}
        type="search"
        name="q"
        id="filter"
        onChange={handleFilterChange}
      ></input>
    </label>
  );
};

Filter.propTypes = {
  handleFilterChange: PropTypes.func,
};

export default Filter;
