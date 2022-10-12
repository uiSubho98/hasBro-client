import React, { useEffect, useState } from 'react';
import {CardElement,useStripe,useElements} from '@stripe/react-stripe-js';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const CheckOutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError , setCardError]=useState('')
    const [success , setSuccess]=useState('')
    const [processing , setprocessing]=useState(false)
    const [transactionId , setTransactionId]=useState('')
    const [clientSecret,setClientSecret]= useState('');

    const [user] = useAuthState(auth);

    const {totalPrice,_id,status} = order
    const email = user?.email;
    // console.log(clientSecret)
    useEffect(()=>{
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalPrice })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [totalPrice])

    const handleSubmit= async(event)=>{
        event.preventDefault()
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
          }
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });

          if(error){
              setCardError(error?.message)
              setprocessing(true);
          }
          else{
       
              setCardError('')
          }
          //confirm card payment

          const {paymentIntent, error: intentError} = await stripe.confirmCardPayment(
            clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        email: 'abc@gmail.com',

      },
    },
  },
);

if(intentError){
    setCardError(intentError.message)
    setprocessing(false)

}
else{
    setCardError('')
 setTransactionId(paymentIntent.id)
    setSuccess('Congrats! Your Payment is Completed')

    const payment={
      order:_id,
      transactionId: paymentIntent.id,
      status:'pending'

    }


    fetch(`http://localhost:5000/order/${_id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify(payment)

    }).then(res=>res.json()).then(data=>{
      setprocessing(false)
      console.log(data);
    })
}

    }
    return (
     <>
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button type="submit" className='btn btn-sm btn-success m-2' disabled={!stripe || !clientSecret }>Pay $ {totalPrice}</button>
      </form>
      {
          cardError && <p className='text-red-500'>{cardError}</p>
      }

{
          success && <div className='text-green-500'><p>{success}</p>
          <p className='text-orange-500 font-bold'  >Your Transaction ID is {transactionId}</p></div>
      }
     </>
    );
};

export default CheckOutForm ;