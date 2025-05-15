import { RestaurantList } from "./config";
import RestaurantCards from "./RestaurantCards";
import { useState, useEffect } from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";

function filterRestaurants(searchText, restaurants) {
    return restaurants.filter( r => r.info.name.includes(searchText));
}



const Body = () => {

    const item = useLocalStorage();
    console.log(item.FirstName);
    console.log(item.LastName);
    // console.log(item.getFirstName("FirstName"));
    // console.log(item.getLastName("LastName"));
 const [searchText, setSearchText] = useState();
 const [allRestaurants, setAllRestaurants] = useState([]);
 const [filteredRestaurants, setFilteredRestaurants] = useState([]);

 useEffect(() => {
    fetchAllRestaurants();
    console.log("Use Effect");
 }, []);


 async function fetchAllRestaurants() {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}
console.log("render");

const online = useOnline();

if (!online) {
    return <h1>You seems to be offline!!!!</h1>;
}


    return allRestaurants?.length === 0 ? (
    <div className="body"><RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        <RestaurantCardShimmer />
        </div>
    ) : (
        <>
        <div className="search-container">
            <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            ></input>
            <button className= "search-button" onClick={() => {
                data = filterRestaurants(searchText, allRestaurants);
                setFilteredRestaurants(data)} 
            }>Search</button>
        </div>
        <div className = "body">
        {filteredRestaurants.map(restraunt => {
           return <Link to={"/restaurant/"+ restraunt.info.id}><RestaurantCards restaurant={restraunt} key={restraunt.info.id}/></Link>
        })}
        </div>
        </>
    );
}

export default Body;