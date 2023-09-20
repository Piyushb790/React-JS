import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockdata";
import { useState } from "react";
const Body = () => {
  [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  console.log(<Body />);
  return (
    <div className="restaurant-container">
      <div className="search">
        <input type="search" /> search
      </div>
      <div className="filter">
        <button
          className="filterBtn"
          //* filter logic here
          onClick={() => (
            (filteredList = listOfRestaurant.filter(
              (resRat) => resRat.info.avgRating > 4
            )),
            console.log(filteredList),
            setListOfRestaurant(filteredList)
          )}
        >
          Top Rated 🌟
        </button>
      </div>
      <div className="cards">
        {listOfRestaurant.map((restro) => (
          <RestaurantCard restroData={restro} key={restro.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
