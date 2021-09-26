import React from 'react';
import './Cart.css';

const Cart = (props) => {
   // console.log(props.cart)
   const {cart} = props
   let total = 0
   let authorName = ''
   let authorImage = ''
   for(const author of cart){
      authorName = authorName + (author.author)
      authorImage = authorImage + (author.img)
      total = total + author.totalBooks
      // console.log(total)
   }
   

   return (
      <div>
         <div className="card">
            <h5 className="card-header text-center">Cart Summary</h5>
            <div className="card-body">
               <h5 className="card-title">Items: {props.cart.length}</h5>
               <h4 className="card-text">Total Books: {total}</h4>
               <span className="d-block">{authorName}</span>
               <div className="text-center">
                  <button className="btn btn-bg btn-md mt-3">More know</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cart;