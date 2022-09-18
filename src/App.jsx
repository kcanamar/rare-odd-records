import About from "./pages/about";
import Artists from "./pages/artists";
import Contact from "./pages/contact";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

export default function App() {
  return (
    <div>
      <About/>
      <Artists/>
      <Contact/>
      <Home/>
      <NotFound/>
    </div> 
  );
}