import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import { useState} from 'react';
import { AddToCart,showDetail } from '../actions';
import { Link } from 'react-router-dom';
import { decreasecartCount } from '../actions';



const Cart=(props)=> {
    const [value,setValue]=useState(1);
    const [toggler,setToggler]=useState(1);
    const [id,setId]=useState(0);
   
    const remove=(index)=>{
       props.cartdetail.splice(index,1);
       setToggler(toggler+1);
       props.decreasecartCount()
    }
    const handle=(e)=>{
        setValue(e.target.value);
        setId(e.target.id)
    }
        return  props.cartdetail.length===0?
        
        <div className="container-sm text-center">
            <h2 >Your Cart is Empty</h2>
        <Link to='/'><button className="btn-danger btn-lg">Shop Now</button></Link>
        </div>
        :
        
        <div>
        <div className="container-fluid">
     <div className="row">
         
         {
         props.cartdetail.map((cart,index)=>{
            return(
                
            <div key={cart.id}>
           <div className="col-md-6">
                <img className="cartImage" src={cart.image}/>
                <div className="cart-main">
                <h2 className="cart-price">${cart.price}</h2>
                    <h3 className="cart-title">{cart.title}</h3>
                    <label>Quantity:</label>
                    {index===Number(id)?<input type="number" id={index} min={1} max={10} value={value} onChange={(e)=>handle(e)}></input>:
                    <input type="number"  min={1} max={10} id={index} value={1} onChange={(e)=>handle(e)}></input>
                    }
                    {index===Number(id)?<h3>{`Total price $${Number(cart.price)*Number(value)}`}</h3>:
                   <h3>{`Total price $${Number(cart.price)}`}</h3>}
                    
                   <Link to='/address'><button className="btn-danger btn-lg">Check Out</button></Link> &nbsp;&nbsp;
                    <button onClick={()=>remove(index)} className="btn-success btn-lg">Remove</button>
                </div>
            </div> 
        
    
        </div>
    )})};
    </div></div></div>
        }
const mapStateToprops=(state)=>{
    console.log(state)
    return {cartdetail:state.addToCart,
        showProductDetail:state.showProductDetail,
    cartCount:state.cartCount
}
}

export default connect(mapStateToprops,{AddToCart,showDetail,decreasecartCount})(Cart);