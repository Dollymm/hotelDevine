import React from 'react'
import Header from './component/Header'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './component/Home'
import Rooms from './component/Roomes'
import About from './component/About'
import Contact from './component/Contact'
import CheckIn from './component/CheckIn'
import Services from './component/Services'
import Footer from './pages/Footer'
import Blogs from './component/Blogs'
import NearBy from './component/NearBy'
import Roomes from './component/Roomes'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header/>

    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rooms' element={<Rooms/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
<CheckIn/>
<Roomes/>
<About/>
<NearBy/>
<Blogs/>
<Services/>
<Contact/>
<Footer/>
    
    </BrowserRouter>
  )
}

export default App