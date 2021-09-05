import React from "react";
import { connect } from "react-redux";
import { push } from "../../redux-first-routing/actions";

const PaymentPage = (props) => {
  const { push } = props;
  return (
    <div>
      <h1 style={{ color: "red" }}>Payment successful</h1>
      <button
        onClick={() => {
          push("/");
        }}
      >
        Go back to Home page
      </button>
    </div>
  );
};

export default connect(null, { push })(PaymentPage);
