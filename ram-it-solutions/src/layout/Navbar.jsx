import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <Link className="navbar-brand mx-2" to="/">
            <img src="/logo.png" alt="" height={'60px'} className="me-2" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse mx-4" id="navbarNavAltMarkup">
            <div className="navbar-nav  ms-auto">
              <NavLink className="nav-link"  to="/">
                <b>Home</b>
              </NavLink>
              <NavLink className="nav-link" to="/what-we-do">
                <b>What we do</b>
              </NavLink>
              <NavLink className="nav-link" to="/who-we-are">
                <b>Who we are</b>
              </NavLink>
              <NavLink className="nav-link"  to="/contact-us">
                <b>Contact us</b>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
