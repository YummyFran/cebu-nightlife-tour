import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page1 from './pages/Page1'
import ScrollToTop from './components/ScrollTop'
import Page4 from './pages/Page4'

import "./styles/ctaButtons.css"


function App() {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/philippine-nightlife' element={<Page1 />}/>
        <Route path='/filipino-personality' element={<Page2 />}/>
        <Route path='/philippine-hangul' element={<Page3 />}/>
        <Route path='/inquiry' element={<Page4 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
