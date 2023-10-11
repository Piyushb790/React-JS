import { restaurantCardImg } from "../utils/constants";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const RestaurantCard = ({ user, restroData }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restroData?.info;
  const { deliveryTime } = restroData?.info?.sla;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="cardcomponent w-56 h-[26rem] bg-[#ffece5] shadow-md  rounded-lg leading-7">
      <img
        src={restaurantCardImg + cloudinaryImageId}
        className="cardimg w-56 h-56 rounded-t-md"
      />
      <div className="p-2 ">
        <p className="font-extrabold text-lg">{name}</p>
        <p className="text-sm">{cuisines.join(", ")}</p>
        <p className="font-semibold text-sm">{avgRating} ⭐ </p>
        <p className="text-sm">{costForTwo}</p>
        <p>{deliveryTime} minutes</p>
        <p>User - {loggedInUser}</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
