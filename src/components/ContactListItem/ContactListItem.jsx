import PropTypes from 'prop-types';
import { useDeleteContactMutation } from "redux/contactsApi";
import { Item, Button } from "./ContactListItem.Styled";

export const ContactListItem = ({id, name, phone}) => {
    const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

    return (
        <Item>
            {name}: {phone}
            <Button type="button" onClick={() => deleteContact(id)} disabled={isDeleting}>{isDeleting ? 'Deleting...' : 'Delete'}</Button>
        </Item>
    );
};

ContactListItem.propType = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
};