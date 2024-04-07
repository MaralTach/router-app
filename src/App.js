import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
   <>
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path="/" element={ <Home />}/>
      <Route path="/" element={<Instructors />}/>
      <Route path="/" element={<Contact />}/>
      <Route path="*" element={<NotFound />}/>
    
    </Routes>
   
    <Footer />
    </BrowserRouter>
  
   </>
   
  
  )
}

export default App;