import React, { useState } from "react";
import { updateProduct } from "../actions/productActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { updateCartItem } from "../actions/cartActions";

const withCounter = (WrappedComponent) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: props.count,
      };
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (e) => {
      const { name, price, id, updateCartItem } = this.props;
      const { count } = this.state;
      const operator = e.target.name;

      if (operator === "+") {
        this.setState(
          (prevState) => {
            return {
              count: prevState.count + 1,
            };
          },
          () => {
            const { count } = this.state;

            const obj = {
              id,
              count,
            };

            updateCartItem(obj);
          }
        );
      } else {
        if (count !== 0) {
          this.setState(
            (prevState) => {
              return {
                count: prevState.count - 1,
              };
            },
            () => {
              const { count } = this.state;

              const obj = {
                id,
                count,
              };

              updateCartItem(obj);
            }
          );
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

const composedWithCounter = compose(
  connect(null, { updateCartItem }),
  withCounter
);
export default composedWithCounter;
