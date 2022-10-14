import './Header.css'
import React from 'react'
import logo from '../../assets/react.svg'

const Header = () => {
  return (
    <div className='container' >

<img className='logo' src={logo} alt="" />
    </div>
  )
}

export default Header