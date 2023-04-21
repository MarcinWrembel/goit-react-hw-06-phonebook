import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactSlicer';

const ContactList = ({ lsKey }) => {
  // const contacts = useSelector(getContacts);
  const stateContacts = useSelector(getContacts);
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  //create filtered array
  const filteredContacts = stateContacts.filter(contact => {
    return (
      contact.name.toLowerCase().includes(filterValue.filter.toLowerCase()) ||
      contact.phone.includes(filterValue.filter)
    );
  });

  const handledDelete = id => {
    dispatch(deleteContact(id));
    localStorage.setItem(lsKey, JSON.stringify(stateContacts));
  };

  const liItems = filteredContacts === [] ? "" : filteredContacts.map(item => {
    return (
      <li key={item.id} id={item.id} className={css.contactListItem}>
        {item.name}: {item.phone}
        <button
          onClick={() => handledDelete(item.id)}
          className={css.btnDelete}
        >
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
