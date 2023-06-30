
import axios from "axios";
let catList = '';
    const Fetchdata = () => {
        axios.get("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",{
        headers:{
            "Content-Type" : "application/json",
            "x-api-key": "live_tJffoCfpPwkpbBaAYyUyEFxzPuZWLL3SsIJBvf1NUtcPk9rU6Skinbsra7dzeBK9"    
        }  
    },)
        .then((response) => response.data.map(
            (cat, i) => {
                const Fetchdataa = () => {
                    axios.get("https://api.thecatapi.com/v1/images/" + cat[i].id,{
                    headers:{
                        "Content-Type" : "application/json",
                        "x-api-key": "live_tJffoCfpPwkpbBaAYyUyEFxzPuZWLL3SsIJBvf1NUtcPk9rU6Skinbsra7dzeBK9"    
                        }  
                    },)
                    .then((response) => console.log(response.data))
                    .catch((error) => console.error("error during fetching"));
        }
    }))
        .then((response) => console.log(response.data))
        .catch((error) => console.error("error during fetching"));
    };
Fetchdata()

    