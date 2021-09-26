import React from 'react';
import './Author.css';

const Author = (props) => {
   // console.log(props.author)
   const {author, birth, nationality, img, maxSales, totalBooks} = props.author
   return (
      <div className="col-md-4">
         <div className="card p-2 text-center">
            <img style={{height:"160px", width:"160px"}} src={img} className="card-img-top rounded-circle m-auto" alt="..."/>
            <div className="card-body">
               <h5 className="card-title text-center">{author}</h5>
               <p className="card-text">Birth Year: {birth}</p>
               <p className="card-text">Nationality: {nationality}</p>
               <p className="card-text">Number of Books: {totalBooks}</p>
               <small>Max estimated Sales: {maxSales}</small>
            </div>
            <button 
            onClick={()=> props.addToCartHandle(props.author)}
            className="btn btn-sm btn-bg rounded"><i className="fas fa-shopping-cart"></i> Add to cart</button>
            <div style={{fontSize:"30px"}} className="d-flex justify-content-evenly mt-2">
               <span style={{color:"#4267B2"}}><i className="fab fa-facebook-square"/></span>
               <span style={{color:"#2867B2"}}><i className="fab fa-linkedin"/></span>
            </div>
         </div>
      </div>
   );
};

export default Author;