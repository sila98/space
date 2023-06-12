import React from 'react'
import Logo from './assets/shared/logo.svg'
import burgerIcon from './assets/shared/icon-hamburger.svg'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <div className="nav">
        <div className="logo">
          <img src={Logo} alt="" />.
        </div>
        <ul>
          <li>
            <Link to="/">00 Home </Link>
          </li>
          <li>
            <Link to="/destination">01 Destination </Link>
          </li>
          <li>
            <Link to="/crew">02 Crew </Link>
          </li>
          <li>
            <Link to="/technology">03 Technology </Link>
          </li>
        </ul>
        <div className='burger'>
            <img src={burgerIcon} alt='burger' />
        </div>
      </div>
    </>
  );
}

export default Nav