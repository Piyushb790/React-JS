import UserClass from "./UserClass";
import UserFunction from "./UserFuncton";
import React from "react";
import UserContext from "../context/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent constructor");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is About Class section</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserFunction name="Piyush Function" location="Dehradun Function" />
        <UserClass name="Piyush Class" location="Dehradun Class" />
      </div>
    );
  }
}

export default About;
