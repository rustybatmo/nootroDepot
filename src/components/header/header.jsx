import React from "react";
import styles from "./header.module.css";
import { connect } from "react-redux";
import { push } from "../../redux-first-routing/actions";

class Header extends React.Component {
  render() {
    const style = {
      color: "red",
    };
    const { push } = this.props;
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
      </div>
    );
  }
}

export default connect(null, { push })(Header);
