import './product.css'
import React, { useEffect, useState } from "react"
import axios from "axios";

const Product = () => {
    const [catData, setCatData] = useState(null);
    
    const Fetchdata = () => {
        axios.get("https://api.thecatapi.com/v1/images/search?format=json&limit=10",{
        headers:{
            "Content-Type" : "application/json",
            "x-api-key": "live_tJffoCfpPwkpbBaAYyUyEFxzPuZWLL3SsIJBvf1NUtcPk9rU6Skinbsra7dzeBK9"    
        }
        
    },)
        .then((response) => setCatData(response.data))
        .catch((error) => console.error("error during fecthing"));

    };
    
    useEffect(()=> {
        Fetchdata()
    },[])

    console.log(catData);

    return (
        <section className='product'>
            <div className= 'product-heading'>
                <h1>ADOPT</h1>
                <p>Click 'ADOPT ME' to find out more about each cat.</p>
            </div> 

        <div className="image-row-1">
            {catData?.slice(0, 4).map((cat) => (
            <div className="image-container">
                    <img className="cat-image" src={cat.url} />
                    <h2 className= "cat-name"> Type of kitty </h2>
                    <p className= "breed"> Kitty </p>
                    <p className= "price"> £300 </p>
                    <button
                        className="grid-button"
                // onClick={(event) => add to basket}
                    >
                    <span class="grid-button-text">MORE INFO</span>
                    </button>
            </div>))}
        </div>

        <div className="image-row-2">
            {catData?.slice(4, 8).map((cat) => (
              <div className="image-container">
                    <img className="cat-image" src={cat.url} />
                    <h2 className= "cat-name"> Type of kitty </h2>
                    <p className= "cat-breed"> Kitty </p>
                    <p className= "price"> £300 </p>
                    <button
                        className="grid-button"
                // onClick={(event) => add to basket}
                    >
                    <span class="grid-button-text">MORE INFO</span>
                    </button>
            </div>))}
        </div> 
    

        </section>

        
    )

};


export default Product;