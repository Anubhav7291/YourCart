import React from 'react';
import {connect} from 'react-redux';
import { decreasecartCount } from '../actions';
import {Link} from 'react-router-dom';
import { auth } from '../reducer';

const Payment=(props)=> {
    let arr=[]
    let c=props.count;
    const handler=(e)=>{
        if(props.isSignedIn){
        props.cartDetails.splice(0, props.cartDetails.length);
        while(c>0){
            props.decreasecartCount();
            c--;
        }}
        if(!props.isSignedIn){
           
            alert('Please login To buy')
        }
       
    }
    return (
        props.cartDetails.length ===0 ?
        <div><h2 className="text-center">Order Placed! Thank you for shopping with us</h2>
       <Link to="/" ><button className="btn-warning btn-lg"style={{marginLeft:"600px"}}>Shop More</button></Link>
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
               {props.cartDetails.map((detail,index)=>{
                   {arr.push(detail.price)}
                   return ( 
                       <div className="payment-cart">
                           <div className="checkout" style={{marginTop:"40px"}}>
                          <img src={detail.image} style={{height:"100px",width:"auto"}}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <h5>{detail.title}</h5>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          <h1 className="label label-success">${detail.price}</h1>
                         
                          </div>
                       </div>

                   )
               })}
           </div>
           <button onClick={e=>handler(e)} style={{marginLeft:"250px",marginTop:"20px"}} className="btn-danger btn-lg text-center">Pay ${Math.round(arr.reduce((acc,cur)=>acc+cur))}</button>
        </div>
    );
}
const mapStateToprops=(state)=>{
    console.log(state)
    return {name:state.Name,
    pin:state.Pin,
mob:state.Mob,
address:state.Address,
state:state.State,
cartDetails:state.addToCart,
count:state.cartCount,
isSignedIn:state.auth.isSignedIn
}

}

export default connect(mapStateToprops,{decreasecartCount})(Payment);