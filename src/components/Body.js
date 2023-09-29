import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { defaultRestraunts } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useIsOnline from "../utils/useIsOnline";
const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const [searchRestaurant, setSearchRestaurant] = useState("");

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

  const online = useIsOnline();
  if (online === false) return <h1>You are offline 🔴</h1>;
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
          <Link key={restro.info.id} to={"/resMenu/" + restro.info.id}>
            <RestaurantCard restroData={restro} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
