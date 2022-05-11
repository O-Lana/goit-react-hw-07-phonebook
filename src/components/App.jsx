import { GlobalStyle } from '../GlobalStyled/GlobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, Title, Subtitle } from './App.styled';
import { Toaster } from 'react-hot-toast';

export default function App() { 
    return (
      <Container>
        <GlobalStyle />
        <Toaster position="top-center" reverseOrder={false}/>
        <Title>Phonebook</Title>
        <ContactForm />

        <Subtitle>Contacts</Subtitle>
        <Filter />
        <ContactList />
      </Container>
    );
  }