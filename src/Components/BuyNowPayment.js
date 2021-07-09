import React, { Component, useState } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

const BuyNowPayment=(props)=> {
    const [render,setrender]=useState(0)
    const handler=(e)=>{
        if(props.IsSignedIn){
        props.BuyNowDetails.splice(0);
        setrender(render+1)
    }
    else{
        console.log(props.IsSignedIn)
       alert('Please Sign In first')
        
    }
}
    
    
    return (
        props.BuyNowDetails.length===0?
        <div className="text-center"><h2 >Order Placed! Thank you for shopping with us</h2>
       <Link to="/" ><button className="btn-warning btn-lg">Shop More</button></Link>
        </div>
        
        :
        <div>
            <h2 style={{marginLeft:"40px"}}>Product will be delivered to below Address</h2>
            <h5 style={{marginLeft:"40px"}}>{`Our Delivery Agent will Contact you on ${props.mob}`}</h5>
            <div className="payment-border">
           <h4>{props.name}</h4>
           <p>{props.address},</p>
           <p>{props.state},</p>
           <p>{props.pin}</p>
           </div>
           <div className="container-sm">
               {props.BuyNowDetails.map((detail,index)=>{
                   
                   return ( 
                       <div className="payment-cart">
                           <div className="checkout" style={{marginTop:"40px"}}>
                          <img src={detail.image} style={{height:"100px",width:"auto"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <h5>{detail.title}</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <h1 className="label label-success">${detail.price}</h1>
                    
                          </div>
                          <button onClick={e=>handler(e)} style={{marginLeft:"200px"}} className="btn-danger btn-lg">Pay ${detail.price}</button>

                       </div>
                       
                   )
               })}
              
           </div>
        
        </div>
    );
}
const mapStateToprops=(state)=>{
    return {name:state.Name,
    pin:state.Pin,
mob:state.Mob,
address:state.Address,
state:state.State,
BuyNowDetails:state.BuyNow,
IsSignedIn:state.auth.isSignedIn
}}

export default connect(mapStateToprops)(BuyNowPayment);