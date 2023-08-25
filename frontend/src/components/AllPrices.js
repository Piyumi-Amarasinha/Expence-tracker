import React, {useState, useEffect} from "react";
import axios from "axios";
export default function AllPrices() {

    const [Prices, setPrices] = useState([]);
    
    useEffect(() => {
        function getPrices() {
            axios.get("http://localhost:8070/home").then((res) => {
                // console.log(res.data);
                setPrices(res.data)
            }).catch((err) => {
                alert(err.message);
            })
        } 
        
        getPrices()
    }, [])
    
    return (
        <div>
            {/* <h1>All Prices</h1> */}
        </div>
    )
}