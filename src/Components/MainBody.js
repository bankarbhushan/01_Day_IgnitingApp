import RestaurantCard from "./RestaurantCard";
import Banner from "./Banner";
import restaurantList from "./restaurantList";
import { useState, useEffect } from "react";
import Simmer from "./Simmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useNetworkStatus from "../utils/useNetworkStatus.js";
import { GET_APP, IMG_CDN_URL } from "./constant.js";

import { HERO_1, HERO_2, HERO_3, HERO_4 } from "./constant";
const MainBody = ({ user }) => {
  const [allRestaurants, setAllRestaurants] = useState(null);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [category, setCategory] = useState([]);
  const [isVisible, setIsvisible] = useState(false);
  const [isLess, setIsLess] = useState(false);
  const [cityData, setCityData] = useState([]);
  const [cityData_Other, setCityData_Other] = useState([]);
  const [searchInput, setSearchText] = useState("");

  // console.log(cityData);

  // console.log(allRestaurants);
  // console.log(category);

  const handleMore = () => {
    setIsvisible((prevState) => !prevState);
    setIsLess((prevState) => !prevState);
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setCityData(json.data?.cards[10]?.card?.card?.cities);
    setCityData_Other(json.data?.cards[6]?.card?.card?.brands);

    const restaurants =
      json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setCategory(
      json.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );

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
      <div className="m-auto flex justify-center">
        <div className="md:flex -mt-64 items-center  hidden   m-auto absolute">
          <img src={HERO_1} className="w-60   " />
          <img src={HERO_2} className="w-60   " />
          <img src={HERO_3} className="w-60   " />
          <img src={HERO_4} className="w-60   " />
        </div>
      </div>
      <div className="w-[80vw] m-auto flex overflow-x-auto overflow-y-hidden flex-nowrap justify-start  py-11 scroll-auto    scroll-container transition-duration-300 transition-timing-function-ease transform transition-duration-300 transition-timing-function-ease box-shadow">
        {category.map((e) => (
          <div key={e.id} className="w-44 flex-shrink-0">
            {/* <p>{e.action.text}</p> */}
            <img src={IMG_CDN_URL + e.imageId} alt="" />
          </div>
        ))}
      </div>

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
            const data = filterData(e.target.value, allRestaurants);
            setFilteredRestaurants(data);
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

      <h2 className="text-2xl font-bold text-center m-10 text-gray-700">
        ────⋆⋅☆⋅⋆── Restaurants with online food delivery ────⋆⋅☆⋅⋆──
      </h2>
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
      <div className="my-20 w-full overflow-x-hidden ">
        <img src={GET_APP} />
      </div>
      <div className="w-4/5 m-auto  ">
        <h1 className="text-2xl text-gray-900 font-bold mb-5 ">
          Cities with food delivery
        </h1>
        <div className="grid grid-cols-4 w-full ">
          {cityData_Other.slice(0, 16).map((city) => (
            <Link to={city?.link}>
              <p className="border rounded-lg px-5 py-3 m-2 hover:bg-slate-100 cursor-pointer text-sm text-gray-700">
                {city?.text}
              </p>
            </Link>
          ))}
        </div>
        {isVisible && (
          <div className="grid grid-cols-4 w-full ">
            {cityData_Other.slice(19).map((city) => (
              <Link to={city?.link}>
                <p className="border rounded-lg px-5 py-3 m-2 hover:bg-slate-100 cursor-pointer text-sm text-gray-700">
                  {city?.text}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className=" float-end  mr-40">
        <button
          className=" px-5 py-2 bg-orange-400 font-semibold text-white rounded-md "
          onClick={() => {
            handleMore();
          }}
        >
          {isLess ? "▲" : "▼"}
        </button>
      </div>

      <div className="w-4/5 m-auto  ">
        <h1 className="text-2xl text-gray-900 font-bold mb-5 mt-20 ">
          Cities with grocery delivery
        </h1>
        <div className="grid grid-cols-5 w-full">
          {cityData.slice(0, 30).map((city) => (
            <Link to={city?.link}>
              <p className="border rounded-lg px-5 py-3 m-2 hover:bg-slate-100 cursor-pointer text-sm text-gray-700 fl">
                <span className="text-sm text-gray-700">Order in </span>{" "}
                {city?.text}
              </p>
            </Link>
          ))}
        </div>
        {isVisible && (
          <div className="grid grid-cols-5 w-full ">
            {cityData.slice(31).map((city) => (
              <Link to={city?.link}>
                <p className="border rounded-lg px-5 py-3 m-2 hover:bg-slate-100 cursor-pointer text-sm text-gray-700">
                  <span className="text-sm text-gray-700">Order in </span>{" "}
                  {city?.text}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="  float-end  mr-40  ">
        <button
          className=" px-5 py-2 bg-orange-400 font-semibold text-white rounded-md "
          onClick={() => {
            handleMore();
          }}
        >
          {isLess ? "▲" : "▼"}
        </button>
      </div>
    </>
  );
};

export default MainBody;
