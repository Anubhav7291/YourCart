import { combineReducers } from "redux";

const productAll=(state=[],action)=>{
    switch(action.type){
        case 'FETCH_PRODUCTS':
            return [...action.payload];
        default:
            return state;
    }
}
const showProductDetail=(state=[],action)=>{
    switch(action.type){
        case 'SHOW_DETAIL':
            return [...state,action.payload]
        default:
            return state;
    }
}

const cartCount=(state=0,action)=>{
    switch(action.type){
        case 'CART_COUNT_INCREASE':
            return state+1
        case 'CART_COUNT_DECREASE':
            return state-1
    
    default:
        return state;
}
}
const addToCart=(state=[],action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state,action.payload]
    default:
        return state;
}
}
const BuyNow=(state=[],action)=>{
    switch(action.type){
        case 'BUY_NOW':
            return [action.payload]
    default:
        return state;
    }}
const Name=(state=[],action)=>{
    switch(action.type){
        case 'NAME':
            return action.payload
    default:
        return state;
}
}

const Mob=(state=[],action)=>{
    switch(action.type){
        case 'MOB':
            return action.payload
    default:
        return state;
}
}
const Pin=(state=[],action)=>{
    switch(action.type){
        case 'PIN':
            return action.payload
    default:
        return state;
}
}
const Address=(state=[],action)=>{
    switch(action.type){
        case 'ADDRESS':
            return action.payload
    default:
        return state;
}
}
const State=(state=[],action)=>{
    switch(action.type){
        case 'STATE':
            return action.payload
    default:
        return state;
}
}


const INITIAL_STATE={
    isSignedIn:null,
    userId:null
}
export const auth =(state=INITIAL_STATE,action)=>{
    switch (action.type){
        case 'SIGN_IN':
            return {...state,isSignedIn:true,userId:action.payload}
        case 'SIGN_OUT':
            return {...state,isSignedIn:false,userId:null}
        default:
            return state;
    }
}




export default combineReducers({
    productAll:productAll,
    showProductDetail:showProductDetail,
    cartCount:cartCount,
    addToCart:addToCart,
    Name:Name,
    Mob:Mob,
    Pin:Pin,
    Address,Address,
    State:State,
    BuyNow:BuyNow,
    auth:auth
});