import React from 'react';
import {connect} from 'react-redux';
import {signIn,signOut} from '../actions'

class GoogleAuth extends React.Component{
    componentDidMount(){
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init({
                clientId:'331393999237-lriumopr57t9ins3l4kft6i5vn82rq00.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            });
        });
    }
    onAuthChange=(isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }else{
            this.props.signOut();
        }
    }
    onSignIn=()=>{
        this.auth.signIn();
    }

    onSignOut=()=>{
        this.auth.signOut();
    }
    renderAuthButton(){
        if(this.props.isSignedIn===null){
            return null;
        }else if(this.props.isSignedIn){
            return<div>
            <button style={{float:"right",marginRight:"10px",marginTop:"10px"}} onClick={this.onSignOut} className="ui red google button">
                <i className="google icon"/> 
                SignOut
            </button>
            <img style={{height:"40px" ,float:"right",borderRadius:"50%",marginRight:"8px"}} src={this.auth.currentUser.ee.dt.CJ}/>
            <h4 style={{float:"right" ,marginRight:"8px"}}>{`Hi ${this.auth.currentUser.ee.dt.uU}`}</h4>
            </div>
           
        }else{
            return  <button  style={{float:"right",marginRight:"10px",marginTop:"10px"}} onClick={this.onSignIn} className="ui red google button">
            <i className="google icon"/>
            Sign in with Google
            </button>
        }
    }
    render(){
        return <div>{this.renderAuthButton()}</div>
    }
   
}
const mapStateToprops=(state)=>{
        return {isSignedIn:state.auth.isSignedIn}
}
export default connect(mapStateToprops,{signIn,signOut})(GoogleAuth);