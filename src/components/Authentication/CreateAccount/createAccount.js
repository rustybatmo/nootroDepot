import React from "react";
import { connect } from "react-redux";
// import { push } from "../../../redux-first-routing/actions";
import { createUser } from "../../../actions/userActions";

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      country: "",
      fname: "",
      lname: "",
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

  handleSubmit = (e) => {
    const { createUser } = this.props;
    const { email, password, country, fname, lname } = this.state;
    //After validation
    createUser({ email, password, country, fname, lname });
    e.preventDefault();
  };

  render() {
    const { email, password, country, fname, lname } = this.state;

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
        </form>
      </div>
    );
  }
}

export default connect(null, { createUser })(CreateAccount);
