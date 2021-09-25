import React from 'react';
import './Cart.css';

const Cart = () => {
   return (
      <div>
         <h3 className="text-center">Order Summary</h3>
         <div className="cart">
            <p>Items: 0</p>
            <p>Sales: 0</p>
            <p>Name: </p>
         </div>
      </div>
   );
};

export default Cart;