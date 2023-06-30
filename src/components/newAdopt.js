import './product.css'
import React, { useEffect, useState } from "react"
import axios from "axios";
import Navbar from './navbar';
import WebFooter from './webFooter';

const Product = () => {
    const [selectedCats, setSelectedCats] = useState({
        catName: "", catBreed: "", catImgSrc: ""});
      function addToBasket(cat){
        setSelectedCats(selectedCats+=cat);
      }
    const [catData, setCatData] = useState(null);
    const [catList, setCatList] = useState(null);
    const Fetchdata = () => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",{
        headers:{
            "Content-Type" : "application/json",
            "x-api-key": "live_tJffoCfpPwkpbBaAYyUyEFxzPuZWLL3SsIJBvf1NUtcPk9rU6Skinbsra7dzeBK9"    
        }  
    },)
        .then(response) => setCatList(response.data)
    const catID = catList.id;
        .catch((error) => console.error("error during fetching"));
    };
    useEffect(() => {
        Fetchdata()
    },[])
    console.log(catList)
    const Fetchdata2 = () => {
        const uRL = "https://api.thecatapi.com/v1/images/" + catID
        axios.get(uRL,{
        headers:{
            "Content-Type" : "application/json",
            "x-api-key": "live_tJffoCfpPwkpbBaAYyUyEFxzPuZWLL3SsIJBvf1NUtcPk9rU6Skinbsra7dzeBK9"    
        }  
    },)
            
    console.log(catData);
    return (
        <section className='product'>
            <div className= 'product-heading'>
            <Navbar />
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
        <WebFooter />
            </div>))}
        </div> 
        </section>
    )
};

export default Product;