import { useState, useEffect } from "react";
import { FETCH_MENU_URL, FETCH_MENU_URL_END } from "../Components/constant.js";

const useRestaurantCard = ([], id) => {
  const [RestaurantCard, setRestaurantCard] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id + FETCH_MENU_URL_END);
    const json = await data.json();

    setRestaurantCard(
      json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card?.itemCards || []
    );
  }
  return RestaurantCard;
};
export default useRestaurantCard;
