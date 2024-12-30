

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border pt-4">
      <div className="container">
        <div className="row">
          {/* Address Section */}
          <div className="col-md-6 mb-3">
            <img src="./logo.png" alt="logo" height={'50px'} />
            <p>
            <i className="fa-solid fa-location-dot me-2"></i>
              120, Karanpur, Near Survey Chowk<br />
              Dehradun - 248001, India
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col-md-6 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className=" me-3">
                <i className="fab fa-facebook-f fa-xl"></i>
              </a>
              <a href="#" className=" me-3">
                <i className="fab fa-twitter fa-xl"></i>
              </a>
              <a href="#" className=" me-3">
                <i className="fab fa-instagram fa-xl"></i>
              </a>
              <a href="#" className="">
                <i className="fab fa-linkedin-in fa-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-secondary" />
        <div className="text-center pb-2" style={{fontSize:'14px'}}>
          &copy; {currentYear} Ram IT Solutions | All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
