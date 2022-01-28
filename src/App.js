import './App.css';
import {BrowserRouter as Router, Routes} from "react-router-dom"
import NavBar from './layout/NavBar';
import Home from "./pages/Home"
function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
    </Router>
  );
}

export default App;
