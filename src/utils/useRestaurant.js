import { useState, useEffect } from "react";
import { REST_MENU_URL } from "../components/config";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        getRestauntMenu(resId);
    }, [])

    async function getRestauntMenu(id) {
        const data = await fetch(REST_MENU_URL+resId);
        const json = await data.json();
       setMenu(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card?.itemCards);
        setRestaurant(json.data.cards[2].card.card.info); 
    }

    return [restaurant, menu];
}

export default useRestaurant;