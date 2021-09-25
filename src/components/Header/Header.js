import React from 'react';
import './Header.css';

const Header = () => {
   return (
      <div className="header">
         <h1>List of best-selling fiction authors</h1>
         <h4>To keep the list manageable, only authors with estimated sales of at least 100 million are included.</h4>
      </div>
   );
};

export default Header;