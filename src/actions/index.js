
export const addAccount = (name, balance) => {
    return{
        type: 'ADD_ACCOUNT',
        payload: {
            name, balance
        }
    };
};

export const removeAccount = (accountId) => {
    return {
        type: 'REMOVE_ACCOUNT',
        payload: accountId
    }
}

export const depositCash = (accountId, amount) => {
    return {
        type: 'DEPOSIT_CASH',
        payload: {
            accountId, amount
        }
    }
}

export const withdrawCash = (accountId, amount) => {
    return {
        type: 'WITHDRAW_CASH',
        payload: {
            accountId, amount
        }
    }
}
