import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../components/header/header";
import HeaderAuth from "../components/headerAuth/headerAuth";
import AuthContextProvider from "../contexts/AuthContext";
import { push } from "../redux-first-routing/actions";
import BodyContainer from "./BodyContainer/BodyContainer";

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("app container is getting called?");
  }

  render() {
    return (
      <React.Fragment>
        <AuthContextProvider>
          <HeaderAuth />
          <Header />
          <BodyContainer />
        </AuthContextProvider>
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
