import React from 'react';
import LoginForm from 'Components/Customer/LoginForm';

import { Link } from "react-router-dom";
const Login = props => {
    return (
         <div>
            <div className="app-header"><h1>Simple Shopping Cart</h1></div>
            <div className="container">
             <LoginForm/>
             </div>
        </div>
    );
};

export default Login;
