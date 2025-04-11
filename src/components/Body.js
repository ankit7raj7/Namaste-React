import { RestaurantList } from "./config";
import RestaurantCards from "./RestaurantCards";
import { useState } from "react";

function filterRestaurants(searchText, restaurants) {
    return RestaurantList.filter( r => r.info.name.includes(searchText));
}

const Body = () => {
 const [searchText, setSearchText] = useState();
 const [restaurants, setRestaurants] = useState(RestaurantList);

    return (
        <>
        <div className="search-container">
            <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button className= "search-button" onClick={() => {
                data = filterRestaurants(searchText, restaurants);
                setRestaurants(data)} 
            }>Search</button>
        </div>
    <div className = "body">
        {restaurants.map(restraunt => {
           return <RestaurantCards restaurant={restraunt} key={restraunt.info.id}/>
        })}
        </div>
        </>
    );
}

export default Body;