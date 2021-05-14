import React from 'react'
import { connect } from 'react-redux';
import {addAccount} from "../actions";

class AddAccount extends React.Component {

    state = { newAc: '', newBalance: ''}

    OnFormSubmit = (event) => {
        event.preventDefault();
        this.props.addAccount(this.state.newAc);
        this.setState({ newAc: ''})
    }

    render() {
        return (
            <form className = "form-group" onSubmit={this.OnFormSubmit}>
                <h3 className="text-center"> Register User Account </h3>
                <div className="form-group">
                    <label>Name</label>
                    <input type = "text" className = "form-control"
                           name = "newAc"
                           value = {this.state.newAc}
                           onChange={(e) => this.setState({newAc: e.target.value})}/>
                </div>

                <div className="form-group">
                    <label>Amount</label>
                    <input type = "text" className = "form-control"
                           name = "newBal"
                           value = {this.state.newBal}
                           onChange={(e) => this.setState({newBal: e.target.value})}/>
                </div>
                <button className = "btn btn-success" value = "submit">Register</button>
            </form>
        )
    }
}

export default connect(null, {addAccount})(AddAccount);
