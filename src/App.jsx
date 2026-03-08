import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/page-2' element={<Page2 />}/>
        <Route path='/page-3' element={<Page3 />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
