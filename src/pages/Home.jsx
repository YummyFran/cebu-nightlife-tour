import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import { useLocation } from 'react-router'

const breakpoint = 768

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)
  const route = useLocation()

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint])

  return (
    <div className='main'>
      <Nav />
      <div className={`${route.pathname === "/" ? "homepage" :""} container`}>
        <div className='homepage'>
          <div className='wrapper'>
            <h1 className='opacity-0'>세부밤문화•세부에코걸•세부 에스코트걸</h1>
            <h2 className='text-white'>세부에코걸 정보를 찾는 중이신가요?</h2>
            
            <div className='hero'>
              <a href="https://www.cebunightguide.com" target='_blank' style={{ textDecoration: "none", color: isMobile ? "white" : 'white' }}>
                <p className='subtitle' style={{ lineHeight: '2', paddingTop: '0.5rem'}}>아래 메인홈페이지 링크(사진)클릭하시고 <br /> 더 많은 세부밤문화 정보 얻어가세요</p>
              </a>
              <a href="https://www.cebunightguide.com" target='_blank' className='leader'>
                <img src={`${isMobile ? '/banner1.0.jpg' : '/banner1.0.jpg'}`} alt="banner" className={`banner clickable ${isMobile ? "mobile" : ""}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home