import React, { Component } from "react";

class UserDetailsPage extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Olefir",
      lastName: "Evhen",
      age: 38,
      email: "evgeniyolefir@gmail.com",
    };
  }

  handleButtonClick = () => {
    this.setState((oldState) => ({
      age: oldState.age + 1,
    }));
  };

  render() {
    const { firstName, lastName, age, email } = this.state;
    return (
      <div className="user-details">
        <h1>User Details</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <button onClick={this.handleButtonClick}>Load User Data</button>
      </div>
    );
  }
}

export default UserDetailsPage;
