import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Simmer from "./Simmer";
import useRestaurant from "../utils/useRestaurant";
import useRestaurantCard from "../utils/useRestaurantCard";
import useOffer from "../utils/useOffer";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";
const RestaurantMenu = () => {
  const img =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  const { id } = useParams();
  // this is for the dynamic id
  // restaurant  use param is responsible to find out the id

  const restaurant = useRestaurant(id);
  const restaurantCard = useRestaurantCard([], id);
  console.log(restaurant);

  console.log(restaurantCard);

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
      <div className="m-auto max-w-screen-lg">
        <h2 className="mt-16 text-center font-bold text-2xl">
          {restaurant.name}
        </h2>

        {/* Restaurant Details */}
        <div className="mb-12 border p-4 mt-12 h-auto flex flex-col md:flex-row rounded-lg shadow-lg bg-white items-center justify-center">
          <img
            className="w-full md:w-64 h-48 md:h-auto object-cover rounded-md mr-4"
            src={img + restaurant.cloudinaryImageId}
            alt="Restaurant"
          />
          <div className="flex flex-col space-y-3 mt-4 md:mt-0">
            <h3 className="text-xl font-semibold">
              <span className="font-medium text-gray-600">Area Name: </span>
              <span className="text-gray-800">{restaurant.areaName}</span>
            </h3>
            <h3 className="text-xl font-semibold">
              <span className="font-medium text-gray-600">City: </span>
              <span className="text-gray-800">{restaurant.city}</span>
            </h3>
            <h3 className="text-xl font-semibold">
              <span className="font-medium text-gray-600">Rating: </span>
              <span className="text-gray-800">{restaurant.avgRating}</span>
            </h3>
            <h3 className="text-xl font-semibold">
              <span className="font-medium text-gray-600">Cost for Two: </span>
              <span className="text-gray-800">
                {restaurant.costForTwoMessage}
              </span>
            </h3>
            <h3 className="text-xl font-semibold">
              <span className="font-medium text-gray-600">Description:</span>
              <div className="mt-2 space-y-1">
                {restaurant?.aggregatedDiscountInfo?.descriptionList?.map(
                  (descriptionList, index) => (
                    <div key={index} className="text-gray-700">
                      <p className="font-medium">
                        {descriptionList?.discountType}
                      </p>
                      <p>{descriptionList?.meta}</p>
                    </div>
                  )
                )}
              </div>
            </h3>
          </div>
        </div>

        {/* Food Items */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 ">
          {restaurantCard.map((item) => (
            <div
              data-testid="menu"
              key={item?.card?.info?.id}
              className="p-6 border rounded-lg shadow-md hover:shadow-lg transition-shadow bg-slate-300 flex flex-col items-center"
            >
              <img
                className="w-32 h-32 object-cover rounded-md mb-4"
                src={img + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <div className="text-center flex-grow">
                <p className="text-xl font-semibold text-gray-800 mb-2">
                  {item?.card?.info?.name}
                </p>
                <p className="text-gray-600 mb-4">
                  {item?.card?.info?.price
                    ? `₹${item.card.info.price / 100}`
                    : "Price not available"}
                </p>
              </div>
              <button
                data-testid="addBtn"
                onClick={() => addFoodItem(item)}
                className="w-full py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
