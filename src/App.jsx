import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about'
import Artists from './pages/artists'
import Contact from './pages/contact'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Nav from './components/Nav'

export default function App () {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="artists" element={<Artists/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  )
}
