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
        <div className="mb-4 mx-4">
          <p className="fs-6 text-uppercase text-center">
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
            address unique business challenges and unlock growth opportunities.{" "}
            <br />
            <b>Our Mission:</b> To empower businesses by providing cutting-edge
            technology solutions that enhance efficiency, drive innovation, and
            deliver measurable results. <br /> <b>Our Vision:</b> To be a global
            leader in IT services, recognized for our commitment to excellence,
            innovation, and sustainability. With a strong focus on quality,
            integrity, and collaboration, Ram IT Solutions is dedicated to
            helping you achieve your business goals and staying ahead in the
            digital age.
          </p>
        </div>
      </div>
      <div className="container my-5">
        <div className="row g-4">
          <div className="col-md-3 col-sm-6">
            <div className="card text-center shadow ">
              <div className="card-body">
                <i className="fa-solid fa-code fa-3x mb-3 text-primary"></i>
                <h5 className="card-title">Web Development</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card text-center shadow ">
              <div className="card-body">
                <i className="fa-solid fa-user-tie fa-3x mb-3 text-success"></i>
                <h5 className="card-title">IT Consulting</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card text-center shadow ">
              <div className="card-body">
                <i className="fa-solid fa-cloud fa-3x mb-3 text-secondary"></i>
                <h5 className="card-title">Cloud Computing</h5>
              </div>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="card text-center shadow ">
              <div className="card-body">
                <i className="fa-solid fa-shield-halved fa-3x mb-3 text-danger"></i>
                <h5 className="card-title">Cybersecurity</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default Home;
