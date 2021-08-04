import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/header/header";
import HeaderAuth from "../components/headerAuth/headerAuth";
import CreateAccount from "../components/Authentication/CreateAccount/createAccount";
import SignIn from "../components/Authentication/SignIn/signIn";
import { push } from "../actions";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { router, push } = this.props;

    return (
      <React.Fragment>
        <HeaderAuth />
        <Header />
        {router.pathname === "/signin" ? <SignIn></SignIn> : <CreateAccount />}
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
