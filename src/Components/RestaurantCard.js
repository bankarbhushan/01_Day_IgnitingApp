import { IMG_CDN_URL } from "./constant.js";
import user from "../utils/userContext.js";

const RestaurantCard = ({
  name,
  avgRating,
  sla,
  cuisines,
  cloudinaryImageId,
  user,
}) => {
  // this restaurant give the data as an object so we will destructuring the data

  // now we have a data stored in props
  // we will extract the data from the
  // console.log(props);
  return (
    <>
      <div className="card">
        <img
          src={IMG_CDN_URL + cloudinaryImageId}
          alt="restaurant image"
          className="restaurant-img"
        ></img>
        <div className="restaurant-info">
          <h4>{name}</h4>
          <div className="card-list">
            <p>{avgRating} : rating</p>
            <p>{sla.slaString}</p>
          </div>
          <p className="info">{cuisines.join(", ")}</p>
          {/* <p className="text-orange-200 opacity-5"> {user.name}</p> */}
        </div>
      </div>
    </>
  );
};
export default RestaurantCard;
