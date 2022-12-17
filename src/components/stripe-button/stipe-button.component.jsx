import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51MFv8cCU9t32DbbRwMJKiVud2ALWguoB1q2aKilOOGFPIYqRovqwuk7Q7JkAdxfPSHjQFXE1q5BeZoZGY4DkE49v00xgkEgVaa";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  return (
    <StripeCheckout
      labe="Pay Now"
      name="CROWN CLOTHING LTD"
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken} // on success callback that triggers when we submit and the submission is gonna get handled by this component
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
