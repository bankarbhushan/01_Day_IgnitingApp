import RestaurantCard from "./RestaurantCard";
import Banner from "./Banner";
import restaurantList from "./restaurantList";
import { useState, useEffect } from "react";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useNetworkStatus from "../utils/useNetworkStatus.js";
const MainBody = ({ user }) => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchInput, setSearchText] = useState("");

  console.log(allRestaurants);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setAllRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }

  const internetStatus = useNetworkStatus();
  if (internetStatus === false) {
    return <h1> Please check your internet connection !!</h1>;
  }

  if (!allRestaurants) {
    return <Simmer />;
  }

  return (
    <>
      <Banner />
      <div className="search-container">
        {/* Search Input */}
        <input
          type="text"
          className="search-input"
          placeholder="Search Best Food on Food Villa"
          value={searchInput}
          data-testid="search_input"
          onInput={(e) => {
            setSearchText(e.target.value);
            // const data = filterData(e.target.value, allRestaurants);
            // setFilteredRestaurants(data);
          }}
        />
        <button
          className="search-btn"
          data-testid="search-btn"
          onClick={() => {
            const data = filterData(searchInput, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <h2>Restaurants with online food delivery</h2>
      <div className="restaurant-list" data-testid="res-list">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard {...restaurant.info} user={user} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default MainBody;
