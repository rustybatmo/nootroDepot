import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { push } from "../../../redux-first-routing/actions";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      country: "",
      fname: "",
      lname: "",
      errorMessage: "",
      successMessage: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  createUser = (userInfo) => {
    const { push } = this.props;
    axios.post("http://localhost:5000/auth/register", userInfo).then((res) => {
      if (res.data === true) {
        console.log("User is now registered and logged in");
        this.setState(
          {
            successMessage: "User created. You will be redirected in 3 seconds",
          },
          () => {
            setTimeout(() => {
              push("/");
            }, 3000);
          }
        );
      } else {
        this.setState({
          errorMessage: "User creation failed",
        });
      }
    });
  };

  handleSubmit = async (e) => {
    const { email, password, confirmPassword, country, fname, lname } =
      this.state;
    const { push } = this.props;
    const userInfo = {
      email,
      password,
      confirmPassword,
    };

    e.preventDefault();

    this.createUser(userInfo);
  };

  render() {
    const {
      email,
      password,
      confirmPassword,
      country,
      fname,
      lname,
      errorMessage,
      successMessage,
    } = this.state;

    return (
      <div>
        <form>
          <label>
            Email address
            <input
              onChange={this.handleChange}
              type="text"
              name="email"
              value={email}
            />
          </label>
          <label>
            Password
            <input
              onChange={this.handleChange}
              type="text"
              name="password"
              value={password}
            />
          </label>
          <label>
            confirmPassword
            <input
              onChange={this.handleChange}
              type="text"
              name="confirmPassword"
              value={confirmPassword}
            />
          </label>

          <label>
            Gender
            <select>
              <option></option>
            </select>
          </label>
          <label>
            Country
            <input
              onChange={this.handleChange}
              type="text"
              name="country"
              value={country}
            />
          </label>
          <label>
            First Name
            <input
              onChange={this.handleChange}
              type="text"
              name="fname"
              value={fname}
            />
          </label>
          <label>
            Last Name
            <input
              onChange={this.handleChange}
              type="text"
              name="lname"
              value={lname}
            />
          </label>
          <button onClick={this.handleSubmit} type="submit">
            Submit
          </button>

          <div style={{ color: "red" }}>{errorMessage}</div>
          <div style={{ color: "green" }}>{successMessage}</div>
        </form>
      </div>
    );
  }
}

export default connect(null, { push })(CreateAccount);
