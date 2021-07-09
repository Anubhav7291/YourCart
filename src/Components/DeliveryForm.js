import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { name,mob,pin,address,state } from '../actions';

const DeliveryForm=(props)=> {
    const [nameValue,setNameValue]=useState('')
    const [mobValue,setMobValue]=useState('')
    const [pinValue,setPinValue]=useState('')
    const [addressValue,setAddressValue]=useState('')
    const [stateValue,setStateValue]=useState('')

    const handler=(e)=>{
        e.preventDefault();
        props.name(nameValue);
        props.mob(mobValue);
        props.pin(pinValue);
        props.address(addressValue);
        props.state(stateValue);
        props.history.push('/payment')
    }
    return (
        <div>
            <div className="container-fluid text-center" style={{width:"50%"}}>
                <h1>Delivery Details</h1>
            <form onSubmit={e=>{handler(e)}}>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" required value={nameValue} onChange={e=>setNameValue(e.target.value)} placeholder="FullName" type="text"></input>
                </div>

                <div className="form-group">
                    <label>Mobile Number</label>
                    <input className="form-control" required value={mobValue} onChange={e=>setMobValue(e.target.value)} placeholder="Mobile Number" type="text"></input>
                </div>

                <div className="form-group">
                    <label>PinCode</label>
                    <input className="form-control" required value={pinValue} onChange={e=>setPinValue(e.target.value)} placeholder="Pincode" type="text"></input>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <textarea className="form-control" required value={addressValue} onChange={e=>setAddressValue(e.target.value)} placeholder="Flat Number/Colony" type="text"></textarea>
                </div>

                <div className="form-group">
                    <label>State</label>
                    <select name="state" id="state" value={stateValue} onChange={e=>setStateValue(e.target.value)} class="form-control">
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
                        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                        <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                        <option value="Assam">Assam</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Chhattisgarh">Chhattisgarh</option>
                        <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                        <option value="Daman and Diu">Daman and Diu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Lakshadweep">Lakshadweep</option>
                        <option value="Puducherry">Puducherry</option>
                        <option value="Goa">Goa</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Haryana">Haryana</option>
                        <option value="Himachal Pradesh">Himachal Pradesh</option>
                        <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                        <option value="Jharkhand">Jharkhand</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Manipur">Manipur</option>
                        <option value="Meghalaya">Meghalaya</option>
                        <option value="Mizoram">Mizoram</option>
                        <option value="Nagaland">Nagaland</option>
                        <option value="Odisha">Odisha</option>
                        <option value="Punjab">Punjab</option>
                        <option value="Rajasthan">Rajasthan</option>
                        <option value="Sikkim">Sikkim</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Telangana">Telangana</option>
                        <option value="Tripura">Tripura</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Uttarakhand">Uttarakhand</option>
                        <option value="West Bengal">West Bengal</option>
                </select>
                </div>
                <div>
               <button type="submit" className="btn-warning btn-lg btn-block" style={{marginTop:"8px"}}>Add Address</button>
                </div>
              

            </form>
           </div>
           
           </div>
           
    );
}
const mapStateToprops=(state)=>{
    return {name:state.Name}
}

export default connect(mapStateToprops,{name,mob,pin,address,state })(DeliveryForm);