import React from 'react'
import { NavLink } from 'react-router'

const Nav = () => {
  return (
    <nav className='nav-bar'>
        <div className="container">
            <ul>
                <li><NavLink to={'/'} className={({ isActive }) => isActive ? 'active' : ''}>세부밤문화여행</NavLink></li>
                <li><NavLink to={'/page-2'} className={({ isActive }) => isActive ? 'active' : ''}>필리핀사람들의 성격 및 특징</NavLink></li>
                <li><NavLink to={'/page-3'} className={({ isActive }) => isActive ? 'active' : ''}>필리핀에서 만난 한글들</NavLink></li>
            </ul>
            <h1 className='logo'>세부밤문화투어•세부황제투어•세부에코걸</h1>
        </div>
    </nav>
  )
}

export default Nav