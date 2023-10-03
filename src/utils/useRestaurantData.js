import { useEffect, useState } from "react";
import { defaultRestraunts } from "./constants";
function useRestaurantData() {
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

  const filterBySearch = () => {
    const searchedList = listOfRestaurant.filter((restroSearch) =>
      restroSearch.info.name
        .toLowerCase()
        .includes(searchRestaurant.toLowerCase())
    );

    setFilteredRestaurant(searchedList);
  };

  const filterByRating = () => {
    const filteredList = listOfRestaurant.filter(
      (resRat) => resRat.info.avgRating > 4
    );

    setFilteredRestaurant(filteredList);
  };

  return {
    listOfRestaurant,
    filteredRestaurant,
    searchRestaurant,
    setSearchRestaurant,
    filterBySearch,
    filterByRating,
  };
}

export default useRestaurantData;
