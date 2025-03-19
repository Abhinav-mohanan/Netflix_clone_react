import React from 'react'
import "./navbar.css"
import logo from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_icon from "../../assets/profile_img.png"
import caret_icon from "../../assets/caret_icon.svg"

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
      <div className="navbar_left">
        <img src={logo} alt="Netflix_logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar_right">
        <img src={search_icon} alt="search_icon" className='icons'/>
        <p>Children</p>
        <img src={bell_icon} alt="bell_icon" className='icons'/>
        <div className="navbar_profile">
        <img src={profile_icon} alt="profile_icon" className='profile'/>
        <img src={caret_icon} alt="dropdown_icon" className='icons'/>
        <div className="dropdown">
          <p>Sign out</p>
        </div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar