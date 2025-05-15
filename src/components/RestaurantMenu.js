import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./config";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {

    const {id} = useParams();
    console.log(id);

   

    const [restaurantInfo, menu] = useRestaurant(id);
    console.log(menu);
   // const [restaurantInfo, setRestaurantInfo] = useState(null);
    //const [menu, setMenu] = useState([]);

    

    return !restaurantInfo ?  <RestaurantCardShimmer/> :
     (
        <div className="restaurantInfo">
           
            <h1>{restaurantInfo?.name}</h1>
            <img src={ IMG_CDN_URL
                         + restaurantInfo?.cloudinaryImageId}/>
            <h2>{restaurantInfo?.costForTwoMessage}</h2>
            <h2>{restaurantInfo?.avgRating} Stars</h2>
        
           { <ul className="menu "> {menu.map(m => {
                return <li key={m?.card?.info?.id}>{m?.card?.info?.name}</li>
            })}
            </ul> }
            </div>
    );
};

export default RestaurantMenu;