import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index }) => {
  const hideShow = () => {
    setShowIndex((prevState) => (prevState === index ? null : index));
  };
  console.log(data);
  return (
    <div className="flex justify-center my-14 ">
      <div className=" w-6/12  bg-slate-200 shadow-md px-2 ">
        <div
          className="flex justify-between items-center font-bold  text-2xl  my-4 cursor-pointer"
          onClick={hideShow}
        >
          <span className="">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⏬</span>
        </div>
        <div>{showItems && <ItemsList items={data.itemCards} />}</div>
      </div>
    </div>
  );
};
export default RestaurantCategory;
