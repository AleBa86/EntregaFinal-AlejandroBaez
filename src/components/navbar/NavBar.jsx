import "./navbar.css";
import "./CartWidget";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
   
      <nav className="navbar navbar-expand-lg" data-bs-theme="dark" id="navBar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src="./img/logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active active" aria-current="page" href="#">
                Monitores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                GPU's
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                Micro Procesadores
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                Mothers
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                Memorias
                </a>
              </li>
            </ul>
          </div>
          <CartWidget/>
        </div>
      </nav>
  );
};

export default NavBar;
