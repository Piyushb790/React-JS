import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

import useResMenu from "../utils/useResMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useResMenu(resId);
  const { name, cuisines } = menu?.cards[0]?.card?.card?.info ?? {};

  const { itemCards } =
    (menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ??
      {}) ||
    (menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ??
      {});

  if (menu === null) return <Shimmer />;
  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <h2>{itemCards[0].card.info.category}</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item?.card?.info?.name} - Rs.
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
