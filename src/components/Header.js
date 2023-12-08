import React from 'react'


function Header() {
  return (
    <header class="header">
        <div class="container">
        <div class="logo">
            <img src="/assets/logo.png"/>
        </div>
        <div class="nav">
            <li class="active"><a  active>Home</a></li>
            <li><a >Pokemon</a></li>
            <li><a >My Pokemon</a></li>
        </div>
        </div>
    </header>
    
  )
}

export default Header
