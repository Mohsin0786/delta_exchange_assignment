import React from 'react'
import './header.css'
import plusIcon from './plus.svg'
 const Header = () => {
  return (
    <div className="header-container">
        <h1>
            Team Members
            </h1>
            <div className="header-button">
                <span>Add members</span><img src={plusIcon}/>
            </div>
            </div>
    
  )
}

export default Header