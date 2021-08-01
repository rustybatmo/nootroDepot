import React from "react";
import styles from "./header.module.css";

class Header extends React.Component {
  render() {
    const style = {
      color: "red",
    };
    return (
      <div className={styles.header}>
        <img src="https://cdn11.bigcommerce.com/s-cebedmpn/images/stencil/original/nd-logo_1625583949__13657.original.png"></img>
        <ul>
          <li>HOME</li>
          <li>SHOP ALL</li>
          <li>SORT BY TYPE</li>
          <li>SORT BY USE</li>
          <li>TOP SELLERS</li>
          <li>BUYING GUIDES</li>
          <li>JOIN NEWSLETTER</li>
        </ul>
      </div>
    );
  }
}

export default Header;
