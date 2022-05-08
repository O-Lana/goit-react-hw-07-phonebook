import { useSelector, useDispatch } from 'react-redux';
import { GlobalStyle } from '../GlobalStyled/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { addContact } from 'redux/itemsSlice';
import { getContacts } from 'redux/itemsSlice';
import { Container, Title, Subtitle } from './App.styled';

export default function App() { 
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const addContacts = ({ name, number }) => {
      const normalizedName = name.toLowerCase();
      const isName = contacts.find(
        (contact) => contact.name.toLowerCase() === normalizedName
      );
        
      if (isName) {
        return alert(`${name} is already in contacts.`);
      }
 
      const contact = {
        id: nanoid(6),
        name,
        number,
      };

      dispatch(addContact(contact));
  };

    return (
      <Container>
        <GlobalStyle />
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContacts}/>

        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList />
      </Container>
    );
  }
