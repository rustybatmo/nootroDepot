import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/header/header";
import HeaderAuth from "../components/headerAuth/headerAuth";
import CreateAccount from "../components/Authentication/CreateAccount/createAccount";
import SignIn from "../components/Authentication/SignIn/signIn";
// import { push } from "../redux-first-routing/actions";
import { push } from "../redux-first-routing/actions";
import HomepageContainer from "./Homepage/HomepageContainer";
import BodyContainer from "./BodyContainer/BodyContainer";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("app container is getting called?");
  }

  render() {
    const { router, push } = this.props;

    return (
      <React.Fragment>
        {/* Whether user logged in or not has to be available here */}
        <HeaderAuth />
        <Header />

        {/* {router.pathname === "/signin" ? <SignIn></SignIn> : <CreateAccount />} */}
        <BodyContainer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    router: state.router,
  };
};

export default connect(mapStateToProps, { push })(AppContainer);
