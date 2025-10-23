import { Link } from "react-router-dom";

function Navbar() {
    
    
    return ( <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand bg-primary border p-2 text-light" href="/">Books App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ms-auto " id="navbarNav">
      <ul className="navbar-nav ms-auto d-felx gap-3">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/create">Create Book</Link>
            
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
            
        </li>
      </ul>
    </div>
  </div>
</nav>
     
    
    </> );
}

export default Navbar;