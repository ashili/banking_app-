import React from 'react';
import { connect } from 'react-dom';

const  DEFAULT_STATE = [
    {
        "id": 1,
        "type": "checking",
        "name": "John Smith",
        "amount": 1237.95,
        "last_transaction": "deposit of  $60.00"
    },
    {
        "id": 2,
        "type": "checking",
        "name": "John Smith",
        "amount": 200.95,
        "last_transaction": "deposited $123.50"
    },
    {
        "id": 3,
        "type": "checking",
        "name": "Marta Stewart",
        "amount": 989.92,
        "last_transaction": "deposit of  $100.00"
    },
    {
        "id": 4,
        "type": "saving",
        "name": "John Smith",
        "amount": 1407.95,
        "last_transaction": "deposit of  $123.50"
    },
    {
        "id": 5,
        "type": "checking",
        "name": "Anis Shili",
        "amount": 500.5,
        "last_transaction": "withdrawal of $123.50"
    }
]



const accountsReducer = (state = DEFAULT_STATE, action) => {
    // let updatedState = [...state];                        //reducer must return a new array/object
    // let accountId;
    // let accBalance;
    // let depAmount;
    // let witAmount;
    // let accName;

    switch (action.type) {

        default:
            return state;
    }
};
export default accountsReducer;
