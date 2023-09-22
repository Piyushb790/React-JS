import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  console.log(filteredRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const [searchRestaurant, setSearchRestaurant] = useState("");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.327563314559253&lng=78.05557072162628&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRestaurant(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestaurant(
      json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-container">
      <div className="search">
        <input
          type="search"
          id="search"
          placeholder="search"
          value={searchRestaurant}
          onChange={(e) => {
            setSearchRestaurant(e.target.value);
          }}
        />
        <button
          className="searchBtn"
          onClick={() => {
            searchedList = listOfRestaurant.filter((restroSearch) =>
              restroSearch.info.name
                .toLowerCase()
                .includes(searchRestaurant.toLowerCase())
            );

            setFilteredRestaurant(searchedList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filterBtn"
          onClick={() => (
            (filteredList = listOfRestaurant.filter(
              (resRat) => resRat.info.avgRating > 4
            )),
            setListOfRestaurant(filteredList)
          )}
        >
          Top Rated 🌟
        </button>
      </div>
      <div className="cards">
        {filteredRestaurant.map((restro) => (
          <RestaurantCard restroData={restro} key={restro.info.id} />
        ))}
      </div>
    </div>
  );
};
export default Body;
