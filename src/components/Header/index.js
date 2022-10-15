import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './styles.css'

const Header = ( ) => {
  const [activeTab, setActiveTab] = useState();
  const location  = useLocation();

  useEffect(() => {
    if(location.pathname === '/') {
      setActiveTab('Home')
    } else if(location.pathname === '/add') {
      setActiveTab('addContact')
    }
    
  }, [location])

  return (
    <div className='header'>
      <a href="/">brand</a>
      <div className="header-right">
        <Link to='/'><p onClick={() => setActiveTab('Home')} className={`${activeTab === 'Home' ? 'active' : ''}`}>Home</p></Link>
        <Link to='/'><p onClick={() => setActiveTab('Adicionar Contato')} className={`${activeTab === 'addContact' ? 'active' : ''}`}>Home</p></Link>
      </div>
    </div>
  )
}

export default Header;