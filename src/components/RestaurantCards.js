import { IMG_CDN_URL } from "./config";

const RestaurantCards = (props) => {
    return (
        <div className = "card">
            <img src={ IMG_CDN_URL
             + props.restaurant.info?.cloudinaryImageId}/>
             <h2>{props.restaurant.info?.name}</h2>
            <h4>{props.restaurant.info?.locality + " - "+ props.restaurant.info?.areaName}</h4>
            <h4>{props.restaurant.info?.cuisines.join(", ")}</h4>
            <h4>{props.restaurant.info?.avgRating} stars</h4>
            <h4>{props.restaurant.info?.sla.slaString}</h4>
        </div>
    );
}

export default RestaurantCards;