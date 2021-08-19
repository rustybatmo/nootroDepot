import styles from "./headerAuth.module.css";
import { connect } from "react-redux";
import { push } from "../../redux-first-routing/actions";
// import { push } from "../../redux-first-routing/actions";

const HeaderAuth = (props) => {
  const { push } = props;

  return (
    <ul style={styles}>
      <li onClick={() => push("/signin")}>Sign In</li>
      <li onClick={() => push("/createaccount")}>Create an account</li>

      {/* <Link to="/home">Create Account</Link> */}
    </ul>
  );
};

export default connect(null, { push })(HeaderAuth);
