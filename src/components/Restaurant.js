import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockdata";
const Restaurant = () => {
  return (
    <div className="restaurant-container">
      <div className="search">
        <input type="search" /> search
      </div>
      <div className="cards">
        {restaurantList.map((restro) => (
          <RestaurantCard restroData={restro} key={restro.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Restaurant;
