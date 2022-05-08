import { useState } from "react";
import PropTypes from 'prop-types';
import { Form, Input, Button } from './ContactForm.styled';
export function ContactForm({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleInputChange = event => {
        const { name, value } = event.target;

        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'number':
                setNumber(value);
                break;
            default: return;
        }

    };

    const handleSubmit = event => {
        event.preventDefault();

        onSubmit({name, number});
        setName('');
        setNumber('');
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
                    name="number"
                    value={number}
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

ContactForm.protoType = {
    onSubmit: PropTypes.func.isRequired,
};
