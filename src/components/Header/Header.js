import React from 'react';

const Header = (props) => {
  const { children } = props;
  
  return ( 
    <header className="header">
      <a href="/" className="header__logo logo">
        <img src="/images/logo.svg" alt="Star Wars" widht="90" height="40" className="logo__image" />
        <span className="logo__text">Star Wars Planet Database</span>
      </a>
      {children}
    </header>
  );
}
 
export default Header;