import React from 'react'


function Header() {
  return (
    <header className="header">
        <div className="container">
        <div className="logo">
            <img src="/assets/logo.png"/>
        </div>
        <div className="nav">
            <li className="active"><a >Home</a></li>
            <li><a >Pokemon</a></li>
            <li><a >My Pokemon</a></li>
        </div>
        </div>
    </header>
    
  )
}

export default Header
