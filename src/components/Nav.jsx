import React from 'react'
import { Link } from 'react-router'

const Nav = () => {
  return (
    <nav className='nav-bar'>
        <div className="container">
            <ul>
                <li><Link to={'/'}>• 세부밤문화여행 •</Link></li>
                <li><Link to={'/page-2'}>• 필리핀사람들의 성격 및 특징 •</Link></li>
                <li><Link to={'/page-3'}>• 필리핀에서 만난 한글들 •</Link></li>
            </ul>
            <div className='logo'>세부밤문화투어•세부황제투어•세부에코걸</div>
        </div>
    </nav>
  )
}

export default Nav