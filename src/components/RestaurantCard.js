import { restaurantCardImg } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restroData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restroData?.info;
  const { deliveryTime } = restroData?.info?.sla;

  return (
    <div className="cardcomponent w-56 h-[26rem] bg-[#ffece5] shadow-md  rounded-lg leading-7">
      <img
        src={restaurantCardImg + cloudinaryImageId}
        className="cardimg w-56 h-56 rounded-t-md"
      />
      <div className="p-2 ">
        <p className="font-extrabold text-lg">{name}</p>
        <p className="text-sm">{cuisines.join(", ")}</p>
        <p className="font-semibold">{avgRating} ⭐ </p>
        <p>{costForTwo}</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
