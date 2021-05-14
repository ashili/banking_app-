import React from 'react';
import {connect} from 'react-redux';


class AccountsList extends React.Component {

    renderList() {
        let accountsList = this.props.accounts
        return accountsList.map((acc, index) => {
            return (
                <li className="list-group-item" key={index}>

                    <div>account: {acc.id}</div>
                    <div>Name : {acc.name}</div>
                        <div>Balance : {acc.amount}</div>
                    <button type="button" className="btn btn-danger float-right">DELETE</button>
                    <button type="button" className="btn btn-success float-right">INFO</button>
                    <button type="button" className="btn btn-info float-right">DEPOSIT </button>
                </li>
            );


        })

    }

    render() {
        console.log(this.props.accounts)
        console.log("HEllo hhh")
        const accts = this.renderList()

        return (
            <div>
                <h3>ACCOUNTS</h3>
                <ul className="list-group">
                    {accts}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    };
}

export default connect(mapStateToProps)(AccountsList);
