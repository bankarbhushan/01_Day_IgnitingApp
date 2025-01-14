import { useState, useEffect } from "react";
import { FETCH_MENU_URL, FETCH_MENU_URL_END } from "../Components/constant.js";

const useOffer = (id, []) => {
  const [offer, setOffer] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id + FETCH_MENU_URL_END);
    const json = await data.json();
    setOffer(
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers[0]
        .info || []
    );
  }
  return offer;
};
export default useOffer;
