import React from 'React'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/home'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
