import React from 'react';
import Form from './Form'
import { Router,Route,BrowserRouter ,Switch} from 'react-router-dom';
import Detail from './Detail';
import Header from './Header';
import Cart from './Cart';
import DeliveryForm from './DeliveryForm';
import Payment from './Payment';
import BuyNowForm from './BuyNowForm';
import BuyNowPayment from './BuyNowPayment';
import SignInPage from './SignInPage';
import '../style/queries.css';

const App=()=> {
    return (
<<<<<<< HEAD
        <div>      
||||||| 6a7693e
        <div>
                <GoogleAuth/>      
=======
        <div>
                     
>>>>>>> 8ca02c0bae69c60b2118352a740fe6d84ac06d1c
            <BrowserRouter>
            <Header/>
            
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/" exact component={Form}></Route>
            <Route path="/details/:id" exact component={Detail}></Route>
            <Route path="/address" exact component={DeliveryForm}></Route>
            <Route path="/payment" exact component={Payment}></Route>
            <Route path="/buynowform" exact component={BuyNowForm}></Route>
            <Route path="/buynowpayment" exact component={BuyNowPayment}></Route>
            <Route path="/signinpage" exact component={SignInPage}></Route>
            </BrowserRouter>
            
        </div>
    );
}

export default App;
