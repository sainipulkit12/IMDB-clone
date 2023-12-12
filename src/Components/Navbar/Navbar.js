import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import user_avatar from '../Assets/user_avatar.png'


function Navbar() {
  return (
    <div className='navbar'>
         <div className="navbarLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"  alt=''/></Link>
                <Link className='navbarLeft-span' to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link className='navbarLeft-span'  to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link className='navbarLeft-span' to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
            </div>
            <div className='navbarright'>
                <img className='user_avatar' src={user_avatar} alt=''/>
            </div>
    </div>
  )
}

export default Navbar