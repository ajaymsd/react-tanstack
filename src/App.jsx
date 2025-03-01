

import './App.css'
import Home from './components/Home'
import TraditionalFetch from './components/TraditionalFetch'
import ReactQuery from './components/ReactQuery'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import PostDetail from './components/PostDetail'
import Pagination from './components/Pagination'
import AddPost from './components/AddPost'

function App() {

  return (
    <>
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/traditional" element={<TraditionalFetch />} />
        <Route path="/react-query" element={<ReactQuery />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path='/react-query/:postId' element={<PostDetail/>}></Route>
        <Route path='/addPost' element={<AddPost/>}></Route>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
