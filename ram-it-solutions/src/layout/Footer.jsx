

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-4 mb-3">
            <h5>Address</h5>
            <p>
              Ram IT Solutions<br />
              123, Example Street<br />
              Dehradun - 248001<br />
              India
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">About Us</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Services</a>
              </li>
              <li>
                <a href="#" className="text-white text-decoration-none">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-white me-3">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center py-2">
          &copy; 2024 Ram IT Solutions | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
