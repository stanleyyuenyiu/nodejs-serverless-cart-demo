import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from 'Pages/Login';
import Main from 'Pages/Main';
import { withRouter } from 'react-router';
import { compose } from 'redux';


const App = props => (
        <div>
        	<Switch>
                <Route exact path="/index.html">
                        <Main/>
                </Route>
                <Route exact path="/">
                        <Main/>
                </Route>
                <Route exact path="/login">
                        <Login/>
                </Route>
            </Switch>
        </div>
);


export default compose(
    withRouter
)(App);
