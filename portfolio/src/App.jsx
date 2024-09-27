import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
function App() {

  return (
      <Router>
        <Header/>
          <Routes>
            <Route element={<Home/>}  path="/" />
          </Routes>
        <Footer/>
      </Router>
  )
}

export default App
