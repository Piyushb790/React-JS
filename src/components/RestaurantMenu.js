import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(0);

  const menu = useResMenu(resId);
  const { name, cuisines, costForTwo } = menu?.cards[0]?.card?.card?.info ?? {};

  const categories =
    menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  if (menu === null) return <Shimmer />;
  return (
    <div className="m-8 text-center">
      <h1 className="text-xl font-bold ">{name}</h1>
      <p className="text-sm my-2">
        {cuisines.join(", ")} - ₹ {costForTwo / 100}
      </p>
      {/* Categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={index}
          showItems={index === showIndex}
          setShowIndex={setShowIndex}
          index={index}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
