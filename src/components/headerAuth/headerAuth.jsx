import styles from "./headerAuth.module.css";
import { connect } from "react-redux";
import { useContext } from "react";
import { push } from "../../redux-first-routing/actions";
import { AuthContext } from "../../contexts/AuthContext";
import { Fragment } from "react";
import axios from "axios";

const HeaderAuth = (props) => {
  const { push } = props;

  const { isLoggedIn, toggleLogIn } = useContext(AuthContext);

  const handleSignOut = () => {
    axios.get("http://localhost:5000/auth/logout").then((res) => {
      console.log("User logged out");
      toggleLogIn();
      push("/");
    });
  };

  return (
    <ul style={styles}>
      {!isLoggedIn ? (
        <Fragment>
          {" "}
          <li onClick={() => push("/signin")}>Sign In</li>
          <li onClick={() => push("/createaccount")}>Create an account</li>
        </Fragment>
      ) : (
        <button onClick={handleSignOut}>Sign out</button>
      )}

      {/* <Link to="/home">Create Account</Link> */}
    </ul>
  );
};

export default connect(null, { push })(HeaderAuth);
