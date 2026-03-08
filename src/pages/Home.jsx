import React from 'react'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div className='main'>
        <Nav />
        <div className="container">
            <h1 className='title'>세부밤문화를 즐기는 3가지 방법</h1>
            <p className='subtitle'>아래 메인홈페이지 링크(사진)클릭하시고 <br /> 세부밤문화 정보 얻어가세요</p>
            <a href="https://cebunightguide.com" target='_blank'>
                <img src={'/banner.png'} alt="banner" className='banner clickable' />
            </a>
            <p className="title">필리핀 여자와 필리핀 밤문화</p>

            <p className='line'>많은 분들이 필리핀을 방문하고자 하실때</p>
            <p className='line'>가장 궁금해 하는 두가지 일거라 생각합니다</p>
            <p className='line'>그럼 필리핀 여자는 우리나라와 비교해서 필리핀 밤문화는</p>
            <p className='line'>우리나라와 비교하면 어떤 차이가 있고 무엇이 좋고 나쁜지</p>
            <p className='line'>미리 알고 가면 현지에서 좀더 좋은 도움이 되겠죠?</p>

            <img src="/banner1.jpg" alt="banner1" className='banner'/>

            <p className="line">사실 필리핀 밤문화가 화려하고 한국보다 더 많은 업소가</p>
            <p className="line">즐비할 것 같지만 업소 숫자나 종사자 수로 보나 한국이</p>
            <p className="line">전세계에서 손꼽히는 밤문화 성지 입니다.</p>
            <p className="line">하지만 밤문화를 즐기는 인원이 한국인으로 한정되어 있다면</p>
            <p className="line">필리핀은 전세계에서 밤문화를 즐기러 온다고 보면</p>
            <p className="line">이해가 쉽게 되겠지요.</p>
            <p className="line">만약에 세부밤문화를 즐기는 도중에도 한국은 짦은 시간에</p>
            <p className="line">여성과의 만남이 쉽게 마무리 된다면 필리핀은 그에 비해</p>
            <p className="line">파트너가 맘에 들면 긴 시간동안 같이 여자 친구처럼 지낼수가 있지요</p>
            <p className="line">빈부격차가 한국보다 훨씬 심하기 때문에</p>
            <p className="line">한국보다 금액을 덜 투자해도 매너 좋고</p>
            <p className="line">외모가 깔끔하다면 필리핀 여자의마음을 얻기 쉬운데요</p>
            <p className="line">예전보다 소득도 높아지고 인터넷 보급으로 한국 미남이</p>
            <p className="line">현지에서도 미남으로 통하기 때문에</p>
            <p className="line">젊고 잘생기면 현지에서 황제처럼 즐길수도 있답니다.</p>
            <p className="line">​그럼 필리핀 여자에 대한 선입견이 있다면 무었일까요?</p>
            <p className="line">피부가 까맣고 외모가 많이 못생기고 못배우고 등등</p>
            <p className="line">아주 많은 편견과 선입견이 있는데요</p>
            <p className="line">그중 몇개는 맞지만 필리핀 여자가 못생긴건 절대 아닙니다.</p>

            <img src="/banner2.jpg" alt="banner2" className='banner'/>
            
            <p className='line'>빈곤층은 영양수준이 낮고 제대로 관리를 받지못해</p>
            <p className='line'>외모가 부족할 순 있지만 최근에는 생활수준도 향상되고</p>
            <p className='line'>관리도 잘해서 패션, 몸매, 얼굴 아주 매력적이랍니다.</p>
            <p className='line'>전세계 여러개의 미인 대회에서 여러번 일등하는</p>
            <p className='line'>몇 안되는 나라가 바로 필리핀 여자라는 사실 아시나요?</p>

            <img src="/banner3.jpg" alt="banner3" className='banner'/>

            <p className="line">오래전부터 스페인 식민지, 중간에 미국, 일본 식민지</p>
            <p className="line">중국인들의 이주로 인해서 혼혈들이 아주 많답니다.</p>
            <p className="line">이 나라 사람들은 혼혈을 좋게 말해서</p>
            <p className="line">하이브리드(hybrid)라고 말하는데요</p>
            <p className="line">그말이 아주 적절하다고 봅니다..</p>
            <p className="line">왜냐하면 필리핀 여자와 결혼하신 분들의</p>
            <p className="line">자녀들을 보면 정말 잘생기고 예쁘거든요</p>
            <p className="line">가수중에 필리핀 혼혈들이 찾아보면 정말 많이 있습니다.</p>
            <p className="line">필리핀 밤문화를 즐기다 보면 가장 신기하고</p>
            <p className="line">재미난 경험이 바로 비키니바 일겁니다.</p>
            <p className="line">한국에도 이런게 있다면 얼마나 재미날까 라고</p>
            <p className="line">하시는 분들이 정말 많은데요</p>
            <p className="line">무대에서 비키니 같은 섹시한 옷을 입고 노래에 맞춰</p>
            <p className="line">섹시 춤을 추는데 정말 춤 하나는 정말 잘 춘답니다.</p>
            <p className="line">그것도 섹시하게,,,</p>
            <p className="line">키는 작지만 비율이 너무나 좋아서 눈 호강 제대로 하실 수 있을겁니다.</p>
            <p className="line">예전 20대들은 클럽에서 현지인들 꼬셔 여자친구 처럼</p>
            <p className="line">지내는 경우가 아주 많았었는데 이제는 클럽이 아니라</p>
            <p className="line">돈벌기 위해 한국 사람 만나는 경우가 99%가 되었답니다</p>
            <p className="line">필리핀 여자를 만나서 로멘스를 꿈꾸는 젊은 청년들의 꿈이 사라진거지요.</p>

            <img src="/banner4.jpg" alt="banner4" className='banner'/>

            <p className='line'>최근에는 업소 탐방보다는 해변 풀빌라같은</p>
            <p className='line'>단독 숙소를 이용해서 프라이빗하게  편히</p>
            <p className='line'>쉬었다가는 패키지 코스를 많이 즐겨 찾으십니다.</p>
            <p className='line'>​필리핀 여자를 알고 필리핀 밤문화를 조금만 습득하신다면</p>
            <p className='line'>짧은 필리핀 밤문화 자유여행 일정 동안 내상 입지 않고</p>
            <p className='line'>좋은 추억 남기실 겁니다.</p>
            <p className='line'>그 나라 문화를 알고 언어를 조금만 습득하신다면</p>
            <p className='line'>서로에게 피해를 주지 않고 잊지 못할 추억 만드실 수 있으실겁니다.</p>
        </div>
    </div>
  )
}

export default Home