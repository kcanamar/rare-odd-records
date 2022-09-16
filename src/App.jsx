import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/about'
import Artists from './pages/artists'
import Contact from './pages/contact'
import Home from './pages/home'
import NotFound from './pages/notFound'
import Nav from './components/nav/Nav'

export default function App () {
  return (
    <BrowserRouter>
      <Nav />
      <About />
      <Artists />
      <Contact />
      <Home />
      <NotFound />
    </BrowserRouter>
  )
}
