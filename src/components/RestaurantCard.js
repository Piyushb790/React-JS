import { restaurantCardImg } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restroData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    restroData?.info;
  const { deliveryTime } = restroData?.info?.sla;

  return (
    <div className="cardcomponent">
      <img src={restaurantCardImg + cloudinaryImageId} className="cardimg" />
      <p>{name}</p>
      <p>{cuisines}</p>
      <p>{avgRating} ⭐ </p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};
export default RestaurantCard;
