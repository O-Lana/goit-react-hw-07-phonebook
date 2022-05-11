import styled from 'styled-components';

export const Item = styled.li`
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    display: inline-block;
    width: 100px;
    padding: 3px auto;
    border: 1px solid transparent;
    border-radius: 10px;
    text-decoration: none;
    font-weight: 400;
    cursor: pointer;

    :hover,
    :focus {
    color: #ffffff;
    background-color: #c2c2c2;
    border: 1px solid transparent;
    }
`;