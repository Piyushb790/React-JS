import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "pop",
      },
    };
    console.log(this.props.name + "child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Piyushb790");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    this.count = setInterval(() => {
      console.log("namaste class react");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("component did update");
  }
  componentWillUnmount() {
    clearInterval(this.count);
    console.log("component unmounted");
  }

  render() {
    console.log(this.props.name + "child render ");
    const { name, followers, avatar_url } = this.state.userInfo;
    return (
      <div style={{ border: "Parent render is called" }}>
        <img src={avatar_url}></img>
        <h1>Name: {name}</h1>
        <h2>Followers: {followers}</h2>
      </div>
    );
  }
}

export default UserClass;
