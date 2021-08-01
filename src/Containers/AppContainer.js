import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/header/header";
import HeaderAuth from "../components/headerAuth/headerAuth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CreateAccount from "../components/Authentication/CreateAccount/createAccount";
import SignIn from "../components/Authentication/SignIn/signIn";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <HeaderAuth />
        <Header />
        <Router>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
        </Router>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    noOfCakes: state.noOfCakes,
  };
};

export default connect(mapStateToProps, null)(AppContainer);
