import React, { useState } from "react";

const withCounter = (WrappedComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
      const { name, price, id } = this.props;
      const { count } = this.state;
      const operator = e.target.name;
      if (operator === "+") {
        this.setState((prevState) => {
          return {
            count: prevState.count + 1,
          };
        });
      } else {
        if (count !== 0) {
          this.setState((prevState) => {
            return {
              count: prevState.count - 1,
            };
          });
        }
      }

      const existingCartItemsObj =
        JSON.parse(localStorage.getItem("cartItems")) || {};

      const newCartItem = {
        name,
        price,
        count,
      };

      //Updating it now

      let updatedCartItemsObj = JSON.stringify({
        ...existingCartItemsObj,
        [id]: newCartItem,
      });

      //saving to the local storage

      localStorage.setItem("cartItems", updatedCartItemsObj);
    };

    render() {
      const { count } = this.state;
      return (
        <div>
          <WrappedComponent
            handleClick={this.handleClick}
            count={count}
            {...this.props}
          />
        </div>
      );
    }
  }

  return NewComponent;
};
export default withCounter;
