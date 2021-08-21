import React from "react";
import { getProductsThunk } from "../actions/productActions";
import { connect } from "react-redux";
import ProductBox from "../components/ProductBox/productBox";

class ProductListContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { getProductsThunk } = this.props;
    getProductsThunk();
  }

  componentDidUpdate() {
    const { productList = [] } = this.props;
    localStorage.setItem("productList", JSON.stringify(productList));
  }
  render() {
    const { productList = [] } = this.props;
    const style = {
      display: "flex",
      flexDirection: "row",
    };

    const productBoxList = productList.map((product, key) => (
      <ProductBox
        key={key}
        name={product.name}
        price={product.price}
        id={product.id}
      />
    ));
    return (
      <React.Fragment>
        {/* <img src="https://cdn11.bigcommerce.com/s-cebedmpn/images/stencil/original/carousel/178/homepage-slider.jpg?c=2"></img> */}

        <div style={style}>{productBoxList}</div>
      </React.Fragment>
    );
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
