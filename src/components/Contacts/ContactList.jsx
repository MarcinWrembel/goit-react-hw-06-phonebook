import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';

const ContactList = ({ remove }) => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  // const dispatch = useDispatch();

  //create filtered array
  const filteredContacts = contacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filterValue.filter.toLowerCase()) ||
      contact.phone.includes(filterValue.filter)
    );
  });

  const liItems = filteredContacts.map(item => {
    return (
      <li key={item.id} id={item.id} className={css.contactListItem}>
        {item.name}: {item.phone}
        <button onClick={() => remove(item.id)} className={css.btnDelete}>
          Delete
        </button>
      </li>
    );
  });

  return <ul className={css.contactList}>{liItems}</ul>;
};

ContactList.propTypes = {
  liItems: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
