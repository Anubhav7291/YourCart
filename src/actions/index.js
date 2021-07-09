import yourcart from '../apis/yourCart'

export const showAllProducts=()=>async dispatch=>{
    const response=await yourcart.get('/products')
    dispatch({type:'FETCH_PRODUCTS',payload:response.data})
}
export const showDetail=(id)=>async dispatch=>{
    const response =await yourcart.get(`/products/${id}`)
    dispatch({type:'SHOW_DETAIL',payload:response.data})
}
export const increasecartCount=()=>{
    return {type:'CART_COUNT_INCREASE'
}}
export const decreasecartCount=()=>{
    return {type:'CART_COUNT_DECREASE'
}}

export const AddToCart=(id)=>async dispatch=>{
    const response =await yourcart.get(`/products/${id}`)
    dispatch({type:'ADD_TO_CART',payload:response.data})
}
export const buyNow=(id)=>async dispatch=>{
    const response =await yourcart.get(`/products/${id}`)
    dispatch({type:'BUY_NOW',payload:response.data});
}
export const name=(value)=>{
    return {type:'NAME',payload:value}
}

export const mob=(value)=>{
    return {type:'MOB',payload:value}
}

export const pin=(value)=>{
    return {type:'PIN',payload:value}
}

export const address=(value)=>{
    return {type:'ADDRESS',payload:value}
}

export const state=(value)=>{
    return {type:'STATE',payload:value}
}

export const signIn=(userId)=>{
    return {
        type:'SIGN_IN',
        payload:userId
    }
}

export const signOut=()=>{
    return {
        type:'SIGN_OUT'
    }
}