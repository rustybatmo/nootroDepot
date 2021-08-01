import styles from "./headerAuth.module.css";
import { Link } from "react-router-dom";

const HeaderAuth = () => {
  return (
    <ul style={styles}>
      <li>
        <a href="/signin"> Sign in </a>
      </li>
      <li>
        <a href="/createAccount"> Create An Account </a>
      </li>
      {/* <Link to="/home">Create Account</Link> */}
    </ul>
  );
};

export default HeaderAuth;
