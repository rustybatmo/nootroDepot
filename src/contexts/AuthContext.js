import React, { Fragment } from "react";
import { Children } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: false,
  toggleLogIn: () => {},
});

class AuthContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.toggleLogIn = this.toggleLogIn.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  toggleLogIn = () => {
    console.log("Toggled output " + this.state.isLoggedIn);
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          isLoggedIn: this.state.isLoggedIn,
          toggleLogIn: this.toggleLogIn,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
