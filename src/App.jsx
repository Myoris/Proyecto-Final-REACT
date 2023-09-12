
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import { Link } from "react-router-dom";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Footer/>
          <BrowserRouter>
              <Routes>
                <Route>
                  <nav>
                      <Link to="/">Inicio</Link>
                  </nav>
                  <Route index element ={Home}/>
                     <Route path="Contact" element ={<Contact/>}/>
                     <Route path="Detail" element ={<Detail/>}/>
                     <Route path="Favs" element ={<Favs/>}/>
                </Route>
              </Routes>         
          </BrowserRouter>
      </div>
  );
}

export default App;
