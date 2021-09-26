import React from 'react';
import './Header.css';

const Header = () => {
   return (
      <div className="container header-bg">
         <div className="header_title text-center">
            <h1>List of best-selling fiction authors</h1>
            <p>This is a list of best-selling fiction authors to date, in any language.</p>
            <h3>only authors with estimated sales of at least 100 million are included.</h3>
         </div>
      </div>
   );
};

export default Header;