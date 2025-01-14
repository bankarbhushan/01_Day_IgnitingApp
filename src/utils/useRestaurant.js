import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../Components/constant.js";

const useRestaurant = (id) => {
  // we will take a id == because we will send the particular data to it
  const [restaurant, setRestaurant] = useState(null);
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();

    setRestaurant(json?.data?.cards?.[2]?.card?.card?.info || {});
  }

  // when all the data will fetch then wil we send the data to the component
  return restaurant;
};

export default useRestaurant;
