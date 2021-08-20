import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { push } from "../../../redux-first-routing/actions";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const { push } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/auth/login", userInfo)
      .then((res) => {
        if (res.data === "success") {
          setSuccessMessage("Login successful. You'll be redicted in 2s");
          setTimeout(() => {
            push("/");
          }, 2000);
        } else {
          setErrorMessage(res.data);
        }
      })
      .catch((err) => {
        console.log("Error logging user in" + err);
      });
  };

  return (
    <div>
      <form>
        <label>
          Email{" "}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <label>
          Password{" "}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          {" "}
          Submit
        </button>
        <div style={{ color: "green" }}>{successMessage}</div>
        <div style={{ color: "red" }}>{errorMessage}</div>
      </form>
    </div>
  );
};

export default connect(null, { push })(SignIn);
