import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './header'
import AddAccount from "./addAccount";
import AccountsList from "./accountsList";
import TransactionsList from "./TransactionsList";

const App = () => {
    return (
        <div>
            <Router>
                <div className='App'>
                    <Header/>

                    <Switch>
                        <Route exact path='/'>
                            <AccountsList />
                        </Route>
                        <Route path='/listView'>
                            <TransactionsList />
                        </Route>
                        <Route path='/addAccount'>
                            <AddAccount />
                        </Route>

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default App;
