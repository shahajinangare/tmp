import React, { Component } from "react";
import JoinForm from "./components/JoinForm";
import "./pwdstrength.css";
import "bootstrap/dist/css/bootstrap.min.css";

class PasswordStrength extends Component {
  constructor(props) {
    super(props);

    this.state = { login: "" };
  }

  render() {
    return (
      <div className="main-container d-block m-auto">
        <JoinForm />
      </div>
    );
  }
}
export default PasswordStrength;
