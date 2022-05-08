// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact, getContacts } from 'redux/itemsSlice';
import { getFilterValue } from 'redux/filterSlice';
import { Container, Item } from './ContactList.styled';

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilterValue);
    const dispatch = useDispatch();

        const normalizedFilter = filter.toLowerCase();
    
        const filteredContacts = contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        );

    return (
        <Container>
            <ul>
                {filteredContacts.map(({ id, name, number }) => (
                    <Item key={id}>
                        {name}: {number}
                        <button type="button" onClick={() => dispatch(removeContact(id))}>Delete</button>
                    </Item>
                ))}
                </ul>
        </Container>
    );
};
