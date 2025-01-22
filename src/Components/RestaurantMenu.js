import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Simmer from "./Simmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOffer from "../utils/useOffer";
import { useDispatch } from "react-redux";
import { OFFER } from "./constant";
import { addItem } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const img =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const { id } = useParams();
  // this is for the dynamic id
  // restaurant  use param is responsible to find out the id

  const restaurant = useRestaurant(id);
  console.log(id);

  const restaurantCard = useRestaurantCard([], id);
  console.log(restaurantCard);

  // console.log(restaurant);

  // here use pass the [] and id because we want the data for the particular card

  const offer = useOffer(id, []);

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  // when restaurant is not present then simmer will show otherwise restaurant will show
  return !restaurant ? (
    <Simmer />
  ) : (
    <>
      <div className="m-auto w-[60vw]">
        <h1 className=" text-start font-bold text-2xl mt-36">
          🍽️ {restaurant.name}{" "}
          <span className="text-gray-500 ml-2"> ─── ⋆⋅☆⋅⋆ ── </span>
        </h1>
        <div className="flex justify-between">
          <Link to={"/"}>
            <button className="mt-10 px-5 py-2 bg-orange-600 font-semibold text-white rounded-md">
              ⬅ Home
            </button>
          </Link>{" "}
          <Link to={"/cart"}>
            <button className="mt-10 px-5 py-2 bg-orange-600 font-semibold text-white rounded-md">
              Cart ➡
            </button>
          </Link>
        </div>

        <div className="mb-12 border p-4 mt-12 h-auto flex flex-col md:flex-row rounded-lg shadow-lg bg-white items-center ">
          <div className="flex flex-col justify-start space-y-3 mt-4 md:mt-0">
            <div className="gap-2 flex justify-start ">
              <p className="text-base font-semibold">
                ⭐️ {restaurant?.avgRating} ({restaurant?.totalRatingsString})
              </p>
              <p className="text-base font-semibold">
                💸 {restaurant.costForTwoMessage}
              </p>
            </div>
            <div className="gap-2 flex justify-start ">
              <p className="text-orange-600  ">📌 {restaurant?.city}</p>
            </div>
            <div>
              <p> 𖤣 outlate {restaurant?.locality}</p>
              <p> ⤷ 20-25 min ⏱</p>
            </div>
          </div>
        </div>
        {/* offrer  */}
        <h3 className="text-xl font-bold text-orange-600">Deals for you</h3>
        <div className="mb-12 border p-4 gap-4 mt-12 h-auto justify-between flex flex-col md:flex-row rounded-lg shadow-lg bg-white items-center ">
          <div className="flex p-2 items-center justify-start border border-gray-400 rounded-lg ">
            <img src={OFFER} className="w-20" />
            <p>{restaurant?.aggregatedDiscountInfo?.header}</p>
          </div>
          <div className="flex p-2 items-center justify-between border border-gray-400 rounded-lg ">
            <img src={OFFER} className="w-20" />
            <p>{restaurant?.aggregatedDiscountInfo?.header}</p>
          </div>
          <div className="flex p-2 items-center justify-between border border-gray-400 rounded-lg ">
            <img src={OFFER} className="w-20" />
            <p>{restaurant?.aggregatedDiscountInfo?.header}</p>
          </div>
          <div className="flex p-2 items-center justify-between border border-gray-400 rounded-lg ">
            <img src={OFFER} className="w-20" />
            <p>{restaurant?.aggregatedDiscountInfo?.header}</p>
          </div>
        </div>

        {/* menu */}
        <h4 className="text-center text-gray-600">
          {" "}
          ────୨ৎ──── MENU ────୨ৎ────
        </h4>
        {/* search */}
        <Link to={"/"}>
          <button className="bg-slate-200 p-2 m-2 w-full flex justify-between rounded-lg cursor-pointer">
            <input
              className="w-[90%] outline-none p-2 rounded-md"
              placeholder="Search for dishes"
            ></input>
            <button className="bg-white p-1">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAW5JREFUSEvtlttNxEAMRb2VAJUAlQCVAJWwVAJUAlQCHCmWriYZP7SK9gdLq/1IMufesceeg50pDmfiWgd8aWb++zKz91NEZ2BA92b2OIEg4PXv2VNXRAS+MbO34oJtATMwDtTl0cy+l+0FQiDsetkR1/dcdb8FVqdAHpJ8eipIC3Fbyf8W+HMpIhbJasCdAiUt/CP2KkvRuPCLbF1JuQBwzvcEqWGnpjGC3S1HBXA3cE2qUtcj+GchoRbV3dCiZLu9EFfrKFi3KvwoUKOFGaZKwaq2WlSjBoqLdBHh0VJAWW3RcZguBZfVBuByuvaq6rQHROe4W9maqvY5HjsQlTk9ErLlmqbU7eyFsVdnY2+cYqnbSNnWdPpY3NPVfE5fDNOJNUsjMpvH9F6fOlEX8xsJVV2CZ43Cnd0FArRR6HEKnWdgdal3Lne1de8qwTvgzsBI4XuBEanwVd/eE+xw7mWrS8He4Gl6/sGdyj3p3V/QbV0fdavm6QAAAABJRU5ErkJggg==" />
            </button>
          </button>
        </Link>

        {/* Food Items */}
        <div className="flex flex-col mt-12 ">
          {restaurantCard.map((item) => (
            <div
              data-testid="menu"
              key={item?.card?.info?.id}
              className="flex justify-between border-b-2 px-2 py-8"
            >
              <div className="pl-3 w-[80%]">
                🔺
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  {item?.card?.info?.name}
                </p>
                <p className="text-black">
                  {item?.card?.info?.price
                    ? `₹${item.card.info.price / 100}`
                    : "Price not available"}
                </p>
                <p className="text-sm mt-3">
                  <span className="text-green-700 font-semibold">
                    ⭐️{item?.card?.info?.ratings?.aggregatedRating?.rating}
                  </span>
                  <span className="ml-1 ">
                    (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                </p>
                <p className=" text-gray-500">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img
                  className="w-40 h-36 object-cover rounded-md mb-4 "
                  src={img + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
                <button
                  data-testid="addBtn"
                  onClick={() => addFoodItem(item)}
                  className="px-10 shadow-lg py-2 rounded-md -mt-8 bg-white border border-gray-300  font-bold items-center text-green-600 hover:bg-slate-100 cursor-pointer"
                >
                  ADD
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
