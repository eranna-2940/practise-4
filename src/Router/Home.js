import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './About'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <div>
        <BrowserRouter>
           <Routes>
                 <Route path='/' element={<Home/>}/>
                 <Route path='/About' element={<About/>}/>
                 <Route path='/Dashboard' element={<Dashboard/>}/>
           </Routes>
        </BrowserRouter>

    </div>
  )
}

export default Home