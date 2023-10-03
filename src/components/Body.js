import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { defaultRestraunts } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchRestaurant, setSearchRestaurant] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(defaultRestraunts);
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
            console.log(filteredList),
            setFilteredRestaurant(filteredList)
          )}
        >
          Top Rated 🌟
        </button>
      </div>
      <div className="cards">
        {filteredRestaurant.map((restro) => (
          <Link key={restro.info.id} to={"/resMenu/" + restro.info.id}>
            <RestaurantCard restroData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
