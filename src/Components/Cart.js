import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurant";
import { addItem, clearCart, removeItems } from "../utils/cartSlice";
import useRestaurant from "../utils/useRestaurant";
import { EMTY_CART } from "../Components/constant";
function Cart() {
  const cartItems = useSelector((store) => store.cart.items);
  const [total, setTotal] = useState(0);
  const restaurant = useRestaurant();
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  const addMe = (item) => {
    dispatch(addItem(item));
  };
  const removeMe = () => {
    dispatch(removeItems());
  };
  useEffect(() => {
    const sum = cartItems.reduce(
      (acc, item) => acc + (item?.card?.info?.price || 0),
      0
    );
    setTotal(sum / 100); // Adjust for actual price calculation
  }, [cartItems]);

  const img =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <>
      <div className="mt-32 px-6 flex flex-col lg:flex-row justify-between w-2/3 border border-b-orange-500 py-2">
        <Link to={"/"}>
          <button className="mt-10 px-5 py-2 bg-orange-600 font-semibold text-white rounded-md ">
            ⬅ Home
          </button>
        </Link>{" "}
        <button
          className="mt-10 px-5 py-2 bg-orange-600 font-semibold text-white rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart ✘
        </button>
      </div>
      <div className="mt-5 px-6 flex flex-col lg:flex-row justify-between w-full">
        {/* Cart Items Section */}

        <div className="w-full lg:w-2/3 space-y-6">
          {cartItems.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex justify-between items-center border-b pb-4 shadow-md rounded-lg"
            >
              <div className="pl-3 w-[70%]">
                <p className="text-xl font-semibold text-gray-800 mb-1">
                  {item?.card?.info?.name}
                </p>
                <p className="text-gray-600">
                  {item?.card?.info?.price
                    ? `₹${item.card.info.price / 100}`
                    : "Price not available"}
                </p>
                <p className="text-sm mt-2">
                  <span className="text-green-700 font-semibold">
                    ⭐️{item?.card?.info?.ratings?.aggregatedRating?.rating}
                  </span>
                  <span className="ml-2 text-gray-500">
                    (
                    {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                    )
                  </span>
                </p>
                <p className="text-gray-500 text-sm mt-1">
                  {item?.card?.info?.description}
                </p>
              </div>
              <div className="flex flex-col items-center mr-3">
                <img
                  className="w-28 h-28 object-cover rounded-md mb-4"
                  src={img + item?.card?.info?.imageId}
                  alt={item?.card?.info?.name}
                />
                <div className="">
                  <button
                    onClick={() => removeMe()}
                    className="px-6 py-2 text-white font-semibold rounded-sm  bg-red-500 hover:bg-red-600 active:scale-95 transition "
                  >
                    -
                  </button>
                  <button
                    onClick={() => addMe(item)}
                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-sm  ml-2 hover:bg-green-600 active:scale-95 transition"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Section */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-6 p-6 bg-gray-50 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-4 mb-4">
            Cart Summary
          </h2>
          {cartItems.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex justify-between mb-3"
            >
              <p className="text-gray-700">{item?.card?.info?.name}</p>
              <p className="text-gray-700">
                {item?.card?.info?.price
                  ? `₹${item.card.info.price / 100}`
                  : "N/A"}
              </p>
            </div>
          ))}
          <div className="flex justify-between mt-6 border-t pt-4">
            <span className="text-lg font-bold">Total:</span>
            <span className="text-lg font-bold text-green-600">
              ₹{total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
