import React, { useState } from "react";
import axios from "axios";


export default function AddPrice() {

    
    const [discription, setDiscription] = useState('');
    const [price, setPrice] = useState("");
    const [type, setType] = useState("");

    function sendData(event) {

        event.preventDefault();

       
        const newPrice = {

            discription,
            price,
            type
        }

        console.log(newPrice);
        axios.post("http://localhost:8070/home", newPrice).then(() => {
            alert("Price Added")
        }).catch((err) => {
            alert(Error)
        });
    }


    return (
        <div className="container" style={{paddingTop:50, paddingLeft:250, paddingRight:250}}>
            <form onSubmit={sendData}>
                <div className="row mb-3">
                    
                    <label for="inputDiscription3" className="col-sm-2 col-form-label">Discription</label>
                    <div className="col-sm-6">
                    <input type="text" className="form-control" id="inputDiscription3" placeholder="Ender the discription"
                    onChange = {(event) => {

                        setDiscription(event.target.value);
                    }} />
                    
                    </div>
                </div>
                
                <div className="row mb-3">
                    
                    <label for="inputPrice3" className="col-sm-2 col-form-label" >Price</label>
                    <div className="col-sm-6">
                    <input type="text" className="form-control" id="inputPrice3" placeholder="Enter the pirce"
                    onChange = {(event) => {

                        setPrice(event.target.value);
                    }} />
                    
                    </div>
                </div>
                
                <div className="row mb-3">
                        
                        <label for="inputType3" className="col-sm-2 col-form-label">Type</label>
                        
                        <div className="col-sm-6">
                            <select className="form-select" aria-label="Default select example" 
                            onChange = {(event) => {
                                setType(event.target.value);
                            }}>
                                
                                 <option selected>Open this select menu</option>
                                 <option value="Income">Income</option>
                                 <option value="Outcome">Outcome</option>
                                                
                            
                            </select>
                        </div>
                </div>
                
                <button type="submit" className="btn btn-primary">Add transaction</button>
                </form> 

<div className="container" style={{paddingTop:100}}>

    <table class="table">
    
            <thead>
                <tr>
                <th scope="col">Pice</th>
                <th scope="col">Discription</th>
                <th scope="col">Type</th>
                <th scope="col">options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                </tr>
                <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                </tr>
        </tbody>
    </table> 
    </div>

    </div>

        
        
    )
}