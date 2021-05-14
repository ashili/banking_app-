import React from 'react';

const DEFAULT_STATE = {
    accounts: [
        {
            "id": 1,
            "type": "checking",
            "name": "John Smith",
            "amount": 1237.95,
            "transactions": []
        },
        {
            "id":
                2,
            "type":
                "checking",
            "name":
                "John Smith",
            "amount":
                200.95,
            "transactions":
                []
        }
        ,
        {
            "id":
                3,
            "type":
                "checking",
            "name":
                "Marta Stewart",
            "amount":
                989.92,
            "transactions":
                []
        }
        ,
        {
            "id":
                4,
            "type":
                "saving",
            "name":
                "John Smith",
            "amount":
                1407.95,
            "transactions":
                []
        }
        ,
        {
            "id":
                5,
            "type":
                "checking",
            "name":
                "Anis Shili",
            "amount":
                500.5,
            "transactions":
                []
        }
    ],
    transactions: [
        { "_id": 1, "accountId": 1, "type": "deposit", "amount": 677.40, "name": "Account Opened" },
        { "_id": 2, "accountId": 1, "type": "deposit", "amount": 1000.00, "name": "Gold Mine Profits" },
        { "_id": 3, "accountId": 1, "type": "withdraw", "amount": 300.00, "name": "Iron Bank Interest" },
        { "_id": 4, "accountId": 1, "type": "withdraw", "amount": 402.34, "name": "Defenses of Kings Landing" },
        { "_id": 5, "accountId": 1, "type": "deposit", "amount": 214.72, "name": "Taxes from Kingdoms" },
        { "_id": 6, "accountId": 2, "type": "deposit", "amount": 500.00, "name": "Account Opened" },
        { "_id": 7, "accountId": 2, "type": "deposit", "amount": 120.34, "name": "Taxes from bannermen" },
        { "_id": 8, "accountId": 2, "type": "withdraw", "amount": 204.23, "name": "Sending Lord to Capital" },
        { "_id": 9, "accountId": 2, "type": "withdraw", "amount": 11.34, "name": "Camping at Twins" },
        { "_id": 10, "accountId": 2, "type": "deposit", "amount": 162.94, "name": "Spoils of War" },
        { "_id": 11, "accountId": 3, "type": "deposit", "amount": 934.36, "name": "Account Opened" },
        { "_id": 12, "accountId": 3, "type": "withdraw", "amount": 394.95, "name": "Younger Brother Rebelled" },
        { "_id": 13, "accountId": 3, "type": "withdraw", "amount": 183.48, "name": "Attacked King's Landing" },
        { "_id": 14, "accountId": 3, "type": "deposit", "amount": 500.00, "name": "Iron Bank Loan" },
        { "_id": 15, "accountId": 3, "type": "withdraw", "amount": 643.03, "name": "Hire Mercenaries" },
        { "_id": 24, "accountId": 3, "type": "withdraw", "amount": 138.64, "name": "Transit to Wall" },
        { "_id": 16, "accountId": 4, "type": "deposit", "amount": 34.75, "name": "Account Opened" },
        { "_id": 17, "accountId": 5, "type": "deposit", "amount": 9.03, "name": "Account Opened" },
        { "_id": 18, "accountId": 6, "type": "deposit", "amount": 1133.45, "name": "Account Opened" },
        { "_id": 19, "accountId": 7, "type": "deposit", "amount": 737.9, "name": "Account Opened" },
        { "_id": 20, "accountId": 8, "type": "deposit", "amount": 483.56, "name": "Account Opened" },
        { "_id": 21, "accountId": 9, "type": "deposit", "amount": 1035.83, "name": "Account Opened" },
        { "_id": 22, "accountId": 10, "type": "deposit", "amount": 0.00, "name": "Account Opened" },
        { "_id": 23, "accountId": 10, "type": "withdraw", "amount": 134.34, "name": "Raiding Repayment" }
    ],
}


const accountsReducer = (state = DEFAULT_STATE, action) => {
    // let updatedState = [...state];                        //reducer must return a new array/object


    switch (action.type) {
        case 'REMOVE_ACCOUNT':
            const accountIndex_remove = state.accounts.findIndex(acc => {
                return acc._id === action.payload;
            });
            return state.accounts.splice(accountIndex_remove, 1)



        default:
            return state;
    }
};
export default accountsReducer;
