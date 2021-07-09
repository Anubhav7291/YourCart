import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header=(props)=> {
    return (
        <div>
<nav class="navbar navbar-light bg-light">
  <Link to="/"><span class="navbar-brand">YourCart</span></Link>
  <GoogleAuth/> 
  <div className="cart">
    <Link to="/cart/"><i class="shopping cart icon big"></i></Link>
  <p className="cart-no" style={{marginRight:"50px"}}>{props.count}</p>
  
  </div>

</nav>

        </div>
       
    );
    
}

const mapStateToprops=(state)=>{
  return {count:state.cartCount}
}
export default connect(mapStateToprops)(Header);