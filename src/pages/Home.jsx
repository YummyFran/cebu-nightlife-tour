import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav'

const breakpoint = 768

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint])

  return (
    <div className='main'>
      <Nav />
      <div className="container">
        <div className='homepage'>
          <div className='wrapper'>
            <h2>세부에코걸 정보를 찾는 중이신가요?</h2>
            
            <div>
              <p className='subtitle'>아래 메인홈페이지 링크(사진)클릭하시고 <br /> 더 많은 세부밤문화 정보 얻어가세요</p>
              <a href="https://www.cebunightguide.com" target='_blank'>
                <img src={`${isMobile ? '/banner1.0.jpg' : '/banner.png'}`} alt="banner" className={`banner clickable ${isMobile ? "mobile" : ""}`} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home