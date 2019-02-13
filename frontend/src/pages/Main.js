import React from 'react';
import { compose } from 'redux';
import Products from 'Components/Products/List';
import Cart from 'Components/Carts/Cart';
import { logout } from 'Actions/customer';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
const Main = props => {
	let group = typeof(props.customer.group) !== "undefined" ? props.customer.group : "";
    return (
        <div>
            <div className="app-header"><h1>Simple Shopping Cart</h1></div>
            <div className="container">
                <div className="text-left">
        	       { (group == "") ? <h3><Link to="/login">Login</Link> as customer to enjoy discount</h3> : <button onClick={()=>{window.location = window.location.href}}>Logout</button>}
                </div>
            <hr/>
            <Products/>
            <hr/>
            <Cart/>
            </div>
        </div>
    );
};



function mapStateToProps(state) {
  return { 
    customer: state.customer.customerstatus
   };
}

const mapDispatchToProps = { logout};

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(Main);

