import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increasecartCount, showDetail ,AddToCart, buyNow} from '../actions';
import {Link} from 'react-router-dom';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={s:false};

    }    
    componentDidMount() { 
        this.props.showDetail(this.props.match.params.id);
        
    }
    cartC=()=>{
        
        this.props.increasecartCount();
        this.props.AddToCart(this.props.match.params.id)
        this.setState({s:true})
    }
    cart=()=>{
        return (
            <div>
            {document.querySelector('.cart-btn').innerHTML=`<h4>Added To Cart</h4>`}
            </div>
        ) 
    }
    buyNow=()=>{
        this.props.buyNow(this.props.match.params.id)
       
    }
    
    render() {
        if(!this.props.details){
            return <div>Loading</div>
        }
            return (
            <div>
                <img className="DetailImage" src={this.props.details.image}/>
                <div className="details">
                   
                    <h3 className="detail-title">{this.props.details.title}</h3>
                    <h2 className="price">${this.props.details.price}</h2>
                     <h2 className="description">{this.props.details.description}</h2>
                    <button onClick={()=>{this.cart();this.cartC()}} className="btn-success btn-lg">Add To Cart</button>&nbsp;&nbsp;
                   <Link to="/buynowform"> <button onClick={()=>this.buyNow()} className="btn-primary btn-lg">Buy Now</button></Link>
                    <div className="cart-btn"></div>
                    {this.state.s?
                    <div style={{marginTop:"10px"}}>
                    <Link to="/cart"><button className="bg-warning btn-lg">Cart</button></Link>&nbsp;&nbsp;
                    <Link to="/address"><button className="bg-info btn-lg">Proceed to Buy ({this.props.count} items)</button></Link>
                    </div>
                :null}</div>
            </div>
        
        );
    }
}

const mapStateToprops=(state,ownProps)=>{
    console.log(state)
    return {details:state.productAll[ownProps.match.params.id-1],
    count:state.cartCount,
cartDetail:state.showProductDetail,
addToCart:state.addToCart}
}


export default connect(mapStateToprops,{showDetail,increasecartCount,AddToCart,buyNow})(Detail);