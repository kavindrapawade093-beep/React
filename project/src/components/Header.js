import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav d-flex flex-row gap-3">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="Color">Color</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/counter">Counter</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/table">Table</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/Password">Password</Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to="/Login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;
