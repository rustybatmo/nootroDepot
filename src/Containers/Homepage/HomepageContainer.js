import React from "react";
import ProductListContainer from "../ProductlistContainer";

class HomepageContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Buy nootropics and supplements</h1>
        <div>Lab Tested For Product Purity and Identity</div>
        <ProductListContainer />
      </React.Fragment>
    );
  }
}

export default HomepageContainer;
