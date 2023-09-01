import React from "react";
import ReactDOM from "react-dom/client";

const Heading2 = () => {
  return (
    <div>
      <Title />
      {Title()}
      {num}
      {Heading}

      <h1>React functional component with return</h1>
    </div>
  );
};

const Title = () => <h1>Namaste React using JSX 🚀</h1>;

const Heading = <h1>React element component</h1>;

console.log(Heading);
let num = 1000;

const description = (
  <div>
    <Heading2 />
    <h1>This is description</h1>
  </div>
);

//React Component
//* class based component
//* Functional component - is normal javascript function which return some peice of jsx

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(description);
