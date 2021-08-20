import React from "react";
import styles from "./header.module.css";
import { connect } from "react-redux";
import { push } from "../../redux-first-routing/actions";
import { AuthContext } from "../../contexts/AuthContext";

class Header extends React.Component {
  render() {
    const { push } = this.props;
    const { isLoggedIn } = this.context;
    return (
      <div className={styles.header}>
        <img src="https://cdn11.bigcommerce.com/s-cebedmpn/images/stencil/original/nd-logo_1625583949__13657.original.png"></img>
        <ul>
          <li onClick={() => push("/")}>HOME</li>
          <li>SHOP ALL</li>
          <li>SORT BY TYPE</li>
          <li>SORT BY USE</li>
          <li>TOP SELLERS</li>
          <li>BUYING GUIDES</li>
          <li>JOIN NEWSLETTER</li>
        </ul>
        <div>
          Info that should be hid
          <ul>
            <li>Account</li>
            <li>Orders</li>
            <li>Returns</li>
          </ul>
        </div>
        <button onClick={() => console.log(isLoggedIn)}> Value</button>
      </div>
    );
  }
}

Header.contextType = AuthContext;

export default connect(null, { push })(Header);
