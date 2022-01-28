import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav className="nav-container"> 
      <div className="title">
          <h1>Flick Finder</h1>
            <p className="subtitle">FIND YOUR NEXT FAVORITE MOVIE</p>
      </div>

      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
      </div>
    </nav>


    


  
  )
}

export default NavBar;
