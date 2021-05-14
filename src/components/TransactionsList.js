import React from 'react';
import {connect} from 'react-redux';


class TransactionsList extends React.Component {

    renderList() {
        let transactionsList = this.props.transactions
        console.log(transactionsList)
        return transactionsList.map((tr, index) => {
            return (
                <li className="list-group-item" key={index}>
                    <div>{tr.name} in the amount of {tr.amount} as {tr.type} in account # {tr.accountId}</div>

                </li>
            );
        })

    }

    render() {

        const trs = this.renderList()

        return (
            <div>
                <h3 className="text-center">TRANSACTIONS</h3>
                <ul className="list-group">
                    {trs}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.accounts.transactions
    };
}

export default connect(mapStateToProps)(TransactionsList);
