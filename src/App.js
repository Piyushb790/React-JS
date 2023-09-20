import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Restaurant from "./components/Restaurant";

const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <Restaurant />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
