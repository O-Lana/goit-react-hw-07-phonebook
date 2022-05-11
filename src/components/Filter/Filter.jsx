import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts, getFilterValue } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
    const value = useSelector(getFilterValue);
    const dispatch = useDispatch();

    const handleChangeFilter = e => {
        dispatch(filterContacts(e.currentTarget.value));
    };
    
    return (
        <div>
            <Label>
            Find contacts by name
            <Input type="text" value={value} onChange={handleChangeFilter} />
            </Label>
        </div>
    );
};