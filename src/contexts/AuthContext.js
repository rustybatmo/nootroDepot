import React, { Fragment } from "react";
import { Children } from "react";

export const AuthContext = React.createContext({
  isLoggedIn: null,
});

class AuthContextProvider extends React.Component {
  render() {
    return (
      <AuthContext.Provider value={{ isLoggedIn: true }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
