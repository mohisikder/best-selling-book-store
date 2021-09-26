import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Cart from '../Cart/Cart';
import './BestAuthor.css';

const BestAuthor = () => {
   const [authors, setAuthors] = useState([])
   const [cart, setCart] = useState([])

   // Data Load
   useEffect(()=>{
      fetch('./authorsdb.json')
      .then(res=> res.json())
      .then(data=> setAuthors(data))
   },[])

   // Add To Cart Handler
   const addToCartHandle = author =>{
      // console.log("Clicked")
      const newCart = [...cart, author]
      setCart(newCart)
   }
   return (
      <div className="container my-3 body-bg">
         <div className="row">
            <div className="col-md-9">
               <div className="row g-4">
                  {
                     authors.map(author=> <Author
                        key={author.key}
                        author={author}
                        addToCartHandle={addToCartHandle}
                     >
                     </Author>)
                  }
               </div>
            </div>
            <div className="col-md-3">
               <Cart cart={cart}></Cart>
            </div>
         </div>
      </div>
   );
};

export default BestAuthor;