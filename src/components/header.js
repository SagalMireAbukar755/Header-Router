import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function header() {
  return (
    <>
        <div className='header'>
            <h1>Router</h1>
            <ul>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to="/features">Features</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/blogs">Blogs</NavLink></li>
            </ul>
        </div>
    </>
  )
}

export default header