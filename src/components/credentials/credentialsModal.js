import React, { useState } from "react";
import { connect } from "react-redux";
import { push } from "../../redux-first-routing/actions";

const CredentialsModal = (props) => {
  const [cardNumber, setcardNumber] = useState("");
  const [cvvNumber, setcvvNumber] = useState("");
  const [name, setname] = useState("");
  const [expiry, setexpiry] = useState("");

  const handlePayNow = () => {
    const { push } = props;
    push("/paymentStatus");
  };

  return (
    <React.Fragment>
      <input
        type="number"
        name="cardNumber"
        placeholder="Enter the card Number"
      />

      <input
        type="number"
        name="cvvNumber"
        placeholder="Enter the cvv number"
      />
      <input type="text" name="name" placeholder="Enter your name" />
      <input
        type="number"
        name="expiry"
        placeholder="Enter the expiry number"
      />
      <button onClick={handlePayNow}>Pay Now</button>
    </React.Fragment>
  );
};

export default connect(null, { push })(CredentialsModal);
