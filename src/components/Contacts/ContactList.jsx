
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contactsFiltered, remove })=> {

    const liItems = contactsFiltered.map(item => {
      return (
        <li key={item.id} id={item.id} className={css.contactListItem}>
          {item.name}: {item.number}
          <button onClick={() => remove(item.id)} className={css.btnDelete}>
            Delete
          </button>
        </li>
      );
    });

    return <ul className={css.contactList}>{liItems}</ul>;

}

ContactList.propTypes = {
  liItems: PropTypes.array,
  name: PropTypes.string,
  id: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
