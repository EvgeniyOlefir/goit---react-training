import React, { Component } from "react";

class UserDetailsPage extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "Olefir",
      lastName: "Evhen",
      age: 38,
      email: "evgeniyolefir@gmail.com",
      inputValue: " ",
    };
  }

  handleButtonClick = () => {
    this.setState(({ age }) => ({
      age: age + 1,
    }));
  };

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { firstName, lastName, age, email, inputValue } = this.state;
    return (
      <div className="user-details">
        <h1>User Details</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
        <input type="text" onChange={this.handleInputChange} value={inputValue} />
        <p>Hello: {inputValue}</p>
        <button onClick={this.handleButtonClick}>Load User Data</button>
      </div>
    );
  }
}

export default UserDetailsPage;
