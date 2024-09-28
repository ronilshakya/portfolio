import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import { useState } from "react";

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const toggleDarkmode = () =>{
    setDarkmode(!darkmode);
  }
  return (
      <Router>
        <Header darkmode={darkmode} toggleDarkmode={toggleDarkmode}/>
          <Routes>
            <Route element={<Home darkmode={darkmode}/>}  path="/" />
            <Route element={<Contact darkmode={darkmode}/>}  path="/contact" />
            <Route element={<Work darkmode={darkmode}/>}  path="/work" />
          </Routes>
        <Footer darkmode={darkmode}/>
      </Router>
  )
}

export default App
