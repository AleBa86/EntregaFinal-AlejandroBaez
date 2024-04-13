import "./navbar.css";
import "./CartWidget";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" data-bs-theme="dark" id="navBar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img className="logo" src="./img/logo.png" alt="" />
        </Link>
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
              <Link
                className="nav-link active active"
                aria-current="page"
                to="/category/monitores"
              >
                Monitores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/gpu">
                GPU's
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/micro">
                Micro Procesadores
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/mother">
                Mothers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/memorias">
                Memorias
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/teclado">
                Teclados
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/category/mouse">
                Mouse
              </Link>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
