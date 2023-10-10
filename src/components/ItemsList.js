import { restaurantCardImg } from "../utils/constants";
const ItemsList = ({ items }) => {
  //   const { name, defaultPrice, price, description, id } = items?.card?.info;
  return (
    <>
      {items.map((item) => (
        <div
          className="leading-8 border-black border-b-2 p-4 "
          key={item?.card?.info?.id}
        >
          <div className="font-bold flex justify-between items-center">
            <h1>{item?.card?.info.name}</h1>
            <p>
              ₹{" "}
              {Math.ceil(
                item?.card?.info.defaultPrice / 100 ||
                  item?.card?.info.price / 100
              )}{" "}
            </p>
          </div>

          <div className="text-left text-xs flex justify-between items-center w-6/12">
            <p>{item?.card?.info.description}</p>
          </div>
          <div
            className="my-4 flex justify-between items-start
          "
          >
            <img
              className="w-24"
              alt="receipe"
              src={restaurantCardImg + item?.card?.info?.imageId}
            />

            <button className="px-2 text-lg  bg-crimson rounded-md">
              Add +
            </button>
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemsList;
