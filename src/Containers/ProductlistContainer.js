import React from "react";
import { getProductsThunk } from "../actions/productActions";
import { connect } from "react-redux";
import ProductBox from "../components/ProductBox/productBox";

class ProductListContainer extends React.Component {
  componentDidMount() {
    const { getProductsThunk } = this.props;
    getProductsThunk();
  }
  render() {
    const { productList = [] } = this.props;

    const productBoxList = productList.map((product) => (
      <ProductBox key={product.id} name={product.name} price={product.price} />
    ));
    return <React.Fragment>{productBoxList}</React.Fragment>;
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    productList: state.productReducer,
  };
};

export default connect(mapStateToProps, { getProductsThunk })(
  ProductListContainer
);
