/**
 * <div id="parent">
 *          <div id="child">
 *              <h1>I am h1</h1>
 *              <h2>I am h2</h2>
 *          <div>
 * <div id="child2">
 *          <h1>I am again h1</h1>
 *          <h2>I am again h2</h2>
 * <div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { key: 1 }, "I am H1"),
    React.createElement("h2", { key: 2 }, "I am H2"),
  ]),
  React.createElement(
    "div",
    { id: "child2" },

    [
      React.createElement("h1", { key: 3 }, "I am again h1"),
      React.createElement("h2", { key: 4 }, "I am again h2"),
    ]
  )
);
console.log(parent);

const heading = React.createElement(
  "h1",
  { className: "myHeadin" },
  "Namaste React "
);

// console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
