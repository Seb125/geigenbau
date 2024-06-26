import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary text-decoration-none">
  <div className="container-fluid">
  <a className="nav-link active me-4 ms-3" href="/"><img src={logo} className="img-thumbnail img-fluid" style={{width: "80px"}} alt="Schwarz Duscheleit Geigenbau"/></a>
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon border-none"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active ms-3 mt-4 mt-md-0" aria-current="page" href="/handel">Handel</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3" aria-current="page" href="/mietinstrumente">Mietinstrumente</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active ms-3" aria-current="page" href="/reparatur">Reparatur</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3" aria-current="page" href="/neubau">Neubau</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3" aria-current="page" href="/kontakt">Kontakt</a>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Header


