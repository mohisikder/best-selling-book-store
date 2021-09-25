import React from 'react';
import   './Author.css';

const Author = (props) => {
   console.log(props.author)
   const {name, bookName, authorImage, sales, originalLanguage,firstPublished, genre} = props.author
   return (
      <div className="col-md-4">   
         <div className="card h-100 p-2">
            <img src={authorImage} className="card-img-top rounded-circle m-auto" style={{height:"200px", width:"200px"}} alt="..."/>
            <div className="card-body">
               <h5 className="card-title">{bookName}</h5>
               <h6 className="card-text">Author: {name}</h6>
               <p>Sales: {sales} million</p>
               <small>Original Language: {originalLanguage}</small>
               <small>First Published: {firstPublished}</small><br />
               <small>Genre: {genre}</small><br />
               <div className="text-center mt-2">
                  <button className="bnt btn-warning border-warning rounded"><i class="fas fa-shopping-cart"></i> Add ToCart</button></div>
               </div>
            <div  style={{fontSize:"30px"}} className="d-flex justify-content-evenly">
               <div style={{color:"#4267B2"}}>
               <i class="fab fa-facebook-square"></i>
               </div>
               <div style={{color:"#0077b5"}}>
               <i class="fab fa-linkedin"></i>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Author;