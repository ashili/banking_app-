import React from 'react'

class AddAccount extends React.Component {

    state = {name: "", type: "", amount: 0}

    OnFormSubmit = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.OnFormSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control"
                           name="name" value={this.state.name}
                           onChange={event => this.setState({name: event.target.value})}/>
                </div>
                <div className="form-group">
                    <label>Type</label>
                    <input type="text" className="form-control"
                           name="type" value={this.state.type}
                           onChange={event => this.setState({type: event.target.value})}/>

                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="text" className="form-control"
                           name="amount" value={this.state.amount}
                           onChange={event => this.setState({amount: event.target.value})}/>
                </div>
                <input type="submit" className="btn btn-success" value = "Add Account"/>
            </form>
        )
    }
}

export default AddAccount
