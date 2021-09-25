import React, { useEffect, useState } from 'react';
import Author from '../Author/Author';
import Cart from '../Cart/Cart';

import './Authors.css';

const Authors = () => {
   const [author, setAuthor] = useState([])
   useEffect(()=>{
      fetch('./authordb.json')
      .then(res=> res.json())
      .then(data=> setAuthor(data))
   },[])
   return (
      <div className="container">
         <div className="row mt-4">
            <div className="col-md-9">
               <div className="row g-4">
                  {
                     author.map(author=><Author
                        key={author.key}
                        author={author}
                     >
                     </Author>)
                  }
               </div>
            </div>
            <div className="col-md-3">
               <Cart/>
            </div>
         </div>
      </div>
   );
};

export default Authors;