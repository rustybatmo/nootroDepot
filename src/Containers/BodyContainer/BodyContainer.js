import React from "react";
import HomepageContainer from "../Homepage/HomepageContainer";
import { connect } from "react-redux";
import SignIn from "../../components/Authentication/SignIn/signIn";
import CreateAccount from "../../components/Authentication/CreateAccount/createAccount";
import ProductlistContainer from "../ProductlistContainer";
import Cart from "../Cart/Cart";
// import CreateAccount from "../../components/Authentication/CreateAccount/CreateAccount";

const BodyContainer = (props) => {
  const { pathname } = props;
  let component = null;
  if (pathname === "/signin") {
    component = <SignIn />;
  } else if (pathname === "/createaccount") {
    component = <CreateAccount />;
  } else if (pathname === "/") {
    component = <ProductlistContainer />;
  } else if (pathname === "/cart") {
    component = <Cart />;
  } else {
    component = <div>Undecided page</div>;
  }

  return (
    <div>
      {/* <h1>This is the page body</h1> */}
      {component}
      {/* <HomepageContainer /> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
    pathname: state.router.pathname,
  };
};

export default connect(mapStateToProps, null)(BodyContainer);
