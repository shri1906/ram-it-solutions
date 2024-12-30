import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div
        id="carouselExampleControls"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img1.png" className="d-block w-100 " alt="img1" />
          </div>
          <div className="carousel-item">
            <img src="/img2.jpg" className="d-block w-100 " alt="img2" />
          </div>
          <div className="carousel-item">
            <img src="/img3.png" className="d-block w-100 " alt="img3" />
          </div>
          <div className="carousel-item">
            <img src="/img4.jpg" className="d-block w-100 " alt="img3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-4">
        <div className="mb-4 custom-div">
          <p className="small-header text-uppercase text-center">
            <b>what we do</b>
          </p>
          <p className="fs-3 text-center">
            <b>
              A forward-thinking IT solutions provider committed to driving
              digital transformation for businesses
            </b>
          </p>
          <p style={{ textAlign: "justify" }}>
            We specialize in delivering innovative, efficient, and scalable
            technology services that empower our clients to thrive in today’s
            competitive digital landscape. Our expertise spans a wide range of
            services, including software development, IT consulting, cloud
            computing and cybersecurity. By leveraging the latest technologies
            and industry best practices, we create customized solutions that
            address unique business challenges and unlock growth opportunities.
          </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card">
              <div className="card-body">
                <i className="fa-solid fa-network-wired fa-3x mb-3 text-secondary"></i>
                <h5 className="card-title fs-6">Networking</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card">
              <div className="card-body">
                <i className="fa-solid fa-code fa-3x mb-3 text-primary"></i>
                <h5 className="card-title fs-6">Web Development</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card">
              <div className="card-body">
                <i className="fa-solid fa-shield-halved fa-3x mb-3 text-danger"></i>
                <h5 className="card-title fs-6">Cyber Security</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card">
              <div className="card-body">
                <i className="fa-solid fa-headset fa-3x mb-3 text-success"></i>
                <h5 className="card-title fs-6">IT Consulting</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card">
              <div className="card-body">
                <i className="fa-solid fa-database fa-3x mb-3 text-primary"></i>
                <h5 className="card-title fs-6">Datacenter Solutions</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card">
              <div className="card-body">
                <i className="fa-solid fa-chalkboard-user fa-3x mb-3 text-success"></i>
                <h5 className="card-title fs-6">Professional Services</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="card text-center shadow ">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text px-3" style={{textAlign:'justify'}}>
                  To empower businesses by delivering cutting-edge, reliable,
                  and scalable IT solutions. We are committed to providing
                  innovative technology services that enhance productivity,
                  streamline processes, and drive digital transformation.
                  Through expert consultation, custom software development, and
                  robust IT infrastructure, we help our clients achieve
                  sustainable growth, overcome technology challenges, and stay
                  ahead in the competitive digital landscape.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card text-center shadow ">
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text px-3" style={{textAlign:'justify'}}>
                  To be a global leader in IT services, recognized for our
                  commitment to excellence, innovation, and sustainability. With
                  a strong focus on quality, integrity, and collaboration, Ram
                  IT Solutions is dedicated to helping you achieve your business
                  goals and staying ahead in the digital age.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info-div text-white d-flex align-items-center justify-content-center py-5">
        <div className="text-center w-100 w-md-50 mx-2">
          <p className="fs-5">Let’s get started</p>
          <h1 className="fs-1 fs-md-1">
            Are you ready for a better, more productive business?
          </h1>
          <p className="fs-5 font-weight-bold mb-4">
            Stop worrying about technology problems. Focus on your business. Let
            us provide the support you deserve.
          </p>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn mb-4"
          >
            Contact Us Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
