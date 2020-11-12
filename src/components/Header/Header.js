import React from 'react';

const Header = (props) => {
  const { children } = props;
  
  return ( 
    <header className="header">
      {children}
    </header>
  );
}
 
export default Header;