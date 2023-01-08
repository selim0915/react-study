
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar navbar-light" style={{'backgroundColor':'#e3f2fd', 'padding':'10px 20px'}}>
            <Link className="navbar-brand" to="/">Home</Link>
            <ul className="navbar-nav" style={{'flex-direction':'row'}}>
                <li className="nav-item me-3">
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        aria-current ="page"
                        to="/blog/admin">Admin
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        exact
                        activeClassName="active"
                        className="nav-link"
                        aria-current ="page"
                        to="/blog">Blog
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Navbar;