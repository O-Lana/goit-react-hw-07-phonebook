import { useState } from "react";
import { useGetContactsQuery, useAddContactMutation } from "redux/contactsApi";
import { Form, Input, Button } from './ContactForm.styled';
import toast from "react-hot-toast";

export function ContactForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const { data = [] } = useGetContactsQuery();
    const [addContact] = useAddContactMutation();

    const handleInputChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'phone':
                setPhone(value);
                break;
            default: return;
        }
    };

    const formSubmitContact = ({ name, phone }) => {
        const normalizedName = name.toLowerCase();
        const isName = data.find(
          (contact) => contact.name.toLowerCase() === normalizedName
        );

        const contact = {
            name,
            phone,
          };
          
        if (isName) {
          toast.error(`${name} is already in contacts.`);
        } else {
  
        addContact(contact);
        toast.success('Contact added');
        };
    };

    const handleSubmit = event => {
        event.preventDefault();

        formSubmitContact({name, phone});
        setName('');
        setPhone('');
    };  

    return (
        <Form onSubmit={handleSubmit}>
            <label>
                Name
                <Input
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleInputChange}
                />
            </label>
            <label>
                Number
                <Input
                type="tel"
                name="phone"
                value={phone}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleInputChange }
                />
            </label>
            <Button type="submit">Add contact</Button>
        </Form>
    )
}