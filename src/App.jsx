

import './App.css'
import Home from './components/Home'
import TraditionalFetch from './components/TraditionalFetch'
import ReactQuery from './components/ReactQuery'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PostDetail from './components/PostDetail'

function App() {

  return (
    <>
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/traditional" element={<TraditionalFetch />} />
        <Route path="/react-query" element={<ReactQuery />} />
        <Route path='/react-query/:postId' element={<PostDetail/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
