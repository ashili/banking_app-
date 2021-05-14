import React from 'react';
import {connect} from 'react-redux';
import {removeAccount, withdrawCash, depositCash} from "../actions";


class AccountsList extends React.Component {
    removeAccount = (accountName) => {
        this.props.removeAccount(accountName.id);           //changed _id -> id
    }
    onFormSubmit = (event) => {
        event.preventDefault();

        if (event === depositCash) {
            this.props.depositCash(this.state.moneyAmount);
        }
        //min 38 in lecture video change
        if (event === withdrawCash) {
            this.props.withdrawCash(this.state.moneyAmount);
        }

        this.setState({moneyAmount: 0, balance: 0});    //clear out of
    }

    renderList() {
        let accountsList = this.props.accounts
        return accountsList.map((acc, index) => {
            return (
                <li className="list-group-item" key={index}>

                    <div>account: {acc.id}</div>
                    <div>Name : {acc.name}</div>
                    <div>Balance : {acc.amount}</div>

                    <form onSubmit={this.onFormSubmit}>
                        <div className="form-group">
                            <label> Amount:  </label>
                            <input type="text" className="form-control"
                                   onChange={(e) => this.setState({moneyAmount: e.target.value})}/>

                        </div>

                        <button type="button"
                                onClick={() => this.props.depositCash(this.props.acc._id, this.state.moneyAmount)}
                                className="btn btn-success">
                            Deposit
                        </button>

                        <button type="button"
                                onClick={() => this.props.withdrawCash(this.props.acc._id, this.state.moneyAmount)}
                                className="btn btn-info">
                            Withdraw
                        </button>


                        <button type="button"
                                onClick={() => this.props.removeAccount(this.props.accounts.acc)}
                                className="btn btn-danger">
                            Delete
                        </button>
                    </form>
                </li>
            );
        })
    }

    render() {

        const accts = this.renderList()

        return (
            <div>
                <h3 className="text-center">ACCOUNTS</h3>
                <ul className="list-group">
                    {accts}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.accounts.transactions
    };
}

export default connect(mapStateToProps, {depositCash, withdrawCash, removeAccount})(AccountsList);
