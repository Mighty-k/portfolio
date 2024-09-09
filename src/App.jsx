import {BrowserRouter as Router, Routes,Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/home"
const App = () =>{
  return(
    <Router>
      <Routes>
        <Route exact path='/' element ={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
