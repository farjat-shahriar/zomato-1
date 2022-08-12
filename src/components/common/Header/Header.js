import React from 'react'
import   './Header.css'

const Header = () => {
  return (
    <div className='max-width header'>
     <img src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&crop=198:42;*,*'
     alt='zomato'
     className='header-logo'
     />
     <div className="header-right">
      <div className="header-location-serch-container">
        <div className="location-wrapper">
          <div className="location-icon-name">
          <i className="fi fi-br-marker absolute-center locatiion-icon"></i>
          <div>Dhaka</div>
          </div>
          <i className="fi fi-rr-caret-down absolute-center"></i>
       </div>
       <div className="location-search-separetor"></div>
       <div className="header-search-bar">
       <i className="fi fi-bs-search absolute-center search-icon"></i>
       <input className='search-input' type="text" placeholder="search for restaurant"  />
       </div>
      </div>
      <div className="profile-wrapper">
      <i className="fi fi-br-mug-alt"></i>
      </div>
      <span className='header-username'>shuvam</span>
      <i className="fi fi-rr-caret-down absolute-center profile-option-icon"></i>
     </div>
    </div>
  )
}

export default Header