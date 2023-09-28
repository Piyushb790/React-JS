import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name + "child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "child componentDidMount");
  }
  render() {
    console.log(this.props.name + "child render ");
    return (
      <div style={{ border: "Parent render is called" }}>
        <h1>Name: {this.props.name}</h1>
        <h2>Location: {this.props.location}</h2>
        <h3>Count: {this.state.count}</h3>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          update
        </button>
      </div>
    );
  }
}

export default UserClass;
