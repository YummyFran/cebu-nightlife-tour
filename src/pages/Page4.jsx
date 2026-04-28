import React from 'react'
import Nav from '../components/Nav'
import CTAButtons from '../components/CTAButtons'

const Page4 = () => {
    return (
        <div className='main'>
            <Nav title='1:1문의'/>

            <div className="container">
                <div className="wrapper">
                    <div className='hero'>
                        <a href="https://www.cebunightguide.com" target='_blank' style={{ textDecoration: "none", color: 'black' }}>
                            <p className='subtitle' style={{ lineHeight: '2' }}>아래 메인홈페이지 링크(사진)클릭하시고 <br /> 더 많은 세부밤문화 정보 얻어가세요</p>
                        </a>
                        <a href="https://www.cebunightguide.com" target='_blank'>
                            <img src={`/banner1.0.jpg`} alt="banner" className={`banner clickable`} />
                        </a>
                    </div>

                    <p className='line'>안전 한 업체, 믿을만한 업체,</p>

                    <p className='line'>문제가 생겨도 처리할 수 있는 능력이 있는 업체</p>

                    <p className='line'>세부밤문화투어와 함께 하시면됩니다!</p>

                    <p className='line'>더 자세한 문의와 비용등 궁금하신거 있으시면</p>

                    <p className='line' style={{ marginBottom: '5rem'}}>아래 카카오톡 & 텔레그램으로 문의주세요^^</p>

                    <CTAButtons />
                </div>
            </div>
        </div>
    )
}

export default Page4