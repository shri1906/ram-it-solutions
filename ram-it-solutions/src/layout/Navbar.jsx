const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container-fluid">
          <a className="navbar-brand mx-2" href="#">
            <img src="/logo.png" alt="" height={'60px'} className="me-2" />
          </a>
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
              <a className="nav-link"  href="#">
                <b>Home</b>
              </a>
              <a className="nav-link" href="#">
                <b>What we do</b>
              </a>
              <a className="nav-link" href="#">
                <b>Who we are</b>
              </a>
              <a className="nav-link"  href="#">
                <b>Contact us</b>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
