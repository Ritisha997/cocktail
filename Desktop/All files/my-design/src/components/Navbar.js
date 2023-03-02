import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setOpen, open}) => {
  return (
    <nav className='Nav-section'>
       <ul className='navbar'>
        <li><Link className='navbar_item' to='/'>home</Link></li>
        <li><Link className='navbar_item' to='/SingleCocktail'>components</Link></li>
        <li><Link className='navbar_item' to='/Grocery'>Grocery</Link></li>
        <li><Link className='navbar_item bar' to='/about' onClick={()=>setOpen(!open)}>bar</Link></li>
       </ul>
    </nav>
  )
}

export default Navbar
