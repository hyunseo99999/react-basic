import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/admin">
                            Admin
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink
                            className="nav-link"
                            aria-current="page"
                            to="/blogs">
                            Blogs
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;