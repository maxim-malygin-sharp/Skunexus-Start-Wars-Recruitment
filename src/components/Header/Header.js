import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

const Header = (props) => {
  const { children } = props;
  const history = useHistory();
  const location = useLocation();
  const isMainPage = location.pathname === '/';
  
  const handleBack = () => {
    history.push("/");
  }
  
  return ( 
    <header className="header">
      <a href="/" className="header__logo logo">
        <img src="/images/logo.svg" alt="Star Wars" widht="90" height="40" className="logo__image" />
        <span className="logo__text">Star Wars Planet Database</span>
      </a>
      {children}

      {!isMainPage && <button onClick={handleBack} className="header__back-link">← Back</button>}
    </header>
  );
}
 
export default Header;