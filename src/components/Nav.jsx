import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'

const breakpoint = 768

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const route = useLocation()
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint])

  return (
    <nav className={`nav-bar ${route.pathname === "/" ? 'homepage' : ''}`}>
      <div className="container">
        <div className='menu'>
          <div>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'active' : ''} header-lg`}>
              <div className="logo-icon">
                <img src={'/icon.png'} alt="" />
              </div>
              세부밤문화
            </NavLink></div>
          <div className='btn' onClick={() => setIsMenuOpen(true)}>메뉴</div>
        </div>
        <ul className={`${isMenuOpen ? "open" : ""}`}>
          <div className="close" onClick={() => setIsMenuOpen(false)}>&times;</div>
          <li><NavLink to={'/'} className={({ isActive }) => `${isActive ? 'active' : ''} header-pc`}>
            {!isMobile && <div className="logo-icon">
              <img src={'/icon.png'} alt="" />
            </div>}
            세부밤문화</NavLink></li>
          <li><NavLink to={'/page-1'} className={({ isActive }) => isActive ? 'active' : ''}>필리핀 여자와 필리핀 밤문화</NavLink></li>
          <li><NavLink to={'/page-2'} className={({ isActive }) => isActive ? 'active' : ''}>필리핀사람들의 성격 및 특징</NavLink></li>
          <li><NavLink to={'/page-3'} className={({ isActive }) => isActive ? 'active' : ''}>필리핀에서 만난 한글들</NavLink></li>
          <li><NavLink to={'/page-4'} className={({ isActive }) => isActive ? 'active' : ''}>1:1문의</NavLink></li>
        </ul>
        <h2 className='logo'>세부밤문화•세부에코걸•세부 에스코트걸</h2>
      </div>
    </nav>
  )
}

export default Nav