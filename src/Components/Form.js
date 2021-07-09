import React from 'react';
import { connect } from 'react-redux';
import {showAllProducts} from '../actions';
import '../style/style.css';

import { showDetail } from '../actions';
import {Link} from 'react-router-dom';

class Form extends React.Component{
 
    componentDidMount(){
        this.props.showAllProducts(); 
        console.log(this.props.productAll)
    }

    render(){
        return (
            <div>
                  <div className="container-fluid">
               <div className="row">
                {this.props.productAll.map(product=>{
                    return (
                      
                        <div className="col-md-3" >
                            <div className="card">
                            <div className="eachProduct">
                              <Link to={`/details/${product.id}`}> <img className="formImage" src={product.image} style={{height:"200px",width:"170px"}}/></Link>
                              <h5>${product.price}</h5>
                                <h4>{product.title}</h4>
                              
                            
                             </div>
                             </div>
                             </div>
                       
                       
                       ) })}
                       </div>
                      
                    </div>
                    </div>
                    
                   
                    
                 
            
        );
        
}
}
const mapStateToprops=(state)=>{
   return {productAll:state.productAll}
}

export default connect(mapStateToprops,{showAllProducts})(Form);