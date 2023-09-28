import UserClass from "./UserClass";
import UserFunction from "./UserFuncton";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount ");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        <h1>This is About Class section</h1>
        {/* <UserFunction name="Piyush Function" location="Dehradun Function" /> */}
        <UserClass name="Piyush Class" location="Dehradun Class" />
        <UserClass name="Akshay " location="Bangalore" />
      </div>
    );
  }
}

export default About;
