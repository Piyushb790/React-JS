import { useState } from "react";

const UserFunction = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "thick solid black" }}>
      <h1>Functional Component</h1>
      <h1>Name: {props.name}</h1>
      <h2>Location: {props.location}</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Update</button>
    </div>
  );
};
export default UserFunction;
