import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({ price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K6zPKSElZbituorUPJV6x77bxNhLzJ1Z5owaIuqiD1JhXMI4vRVKRLlXnae7lPN6gjs7wxLIjbG26KBzWVZIysz00rGNwmQyC';

 const onToken = token => {
    console.log(token);
    alert('Payment Succesful');
}
    return(
        <StripeCheckout

         label = 'Pay Now'
         name = 'CLOTHING Ltd.'
         billingAddress
         shippingAddress
         image = 'https://svgshare.com/i/CUz.svg'
         description={`Your total is ₹${price}`}
         amount = {priceForStripe}
         panelLabel = 'Pay Now'
         token = {onToken}   
         stripeKey ={publishableKey}
         currency = 'INR'
        />
    );
};
 

export default StripeCheckoutButton;