import { useSelector } from 'react-redux';
import { useGetContactsQuery } from "redux/contactsApi";
import { getFilterValue } from 'redux/filterSlice';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Container, Text } from './ContactList.styled';

export const ContactList = () => {
    const { data = [], error, isLoading } = useGetContactsQuery();

    const contacts = data;

    const filter = useSelector(getFilterValue);
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
        <Container>
            {isLoading && <p>Loading...</p>}
            {!isLoading && contacts.length === 0 && <Text>Your phonebook is empty!</Text>}

            {error && contacts?.length > 0 && (
                <Text>Something went wrong. Please refresh the page</Text>
            )}
            {contacts?.length > 0 && !error &&
                <ul>
                    {filteredContacts.map((contact) => (
                        <ContactListItem key={contact.id} {...contact} />
                    ))}
                </ul>
            }
        </Container>
    );
};
