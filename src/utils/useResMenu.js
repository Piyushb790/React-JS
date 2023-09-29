import { useEffect, useState } from "react";
import { menuApi } from "./constants";
const useResMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(menuApi + resId);
    const jsonData = await data.json();
    console.log(jsonData);
    setMenu(jsonData.data);
  };
  return menu;
};

export default useResMenu;
