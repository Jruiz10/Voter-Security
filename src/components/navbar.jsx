import "../css/navbar.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Vote from "../vote.jsx";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <Link className="navbar-brand nav-item" to={Vote}>
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-item">
              <Link className="navbar-brand" to="/CourseUpload">
                Course Upload
              </Link>
            </li>
          </div>
        </div>
        <ul className="navbar-nav ml-auto">
          <li class="nav-item">
            <Link className="navbar-brand" to="/logout">
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
