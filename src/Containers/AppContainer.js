import axios from "axios";
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
    axios
      .get("http://localhost:5000/auth/loggedIn")
      .then((res) => {
        if (res.data) {
          console.log("user is logged in");
        } else {
          console.log("User is not logged in");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
