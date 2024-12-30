import "../styles/home.css";
import { Link } from "react-router-dom";

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
            <div className="card text-center shadow custom-card h-100">
              <div className="card-body">
                <i className="fa-solid fa-network-wired fa-3x mb-3 text-secondary"></i>
                <h5 className="card-title fs-6">Networking</h5>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card h-100">
              <div className="card-body">
                <i className="fa-solid fa-code fa-3x mb-3 text-primary"></i>
                <h5 className="card-title fs-6">Web Development</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card h-100">
              <div className="card-body">
                <i className="fa-solid fa-shield-halved fa-3x mb-3 text-danger"></i>
                <h5 className="card-title fs-6">Cyber Security</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card h-100">
              <div className="card-body">
                <i className="fa-solid fa-headset fa-3x mb-3 text-success"></i>
                <h5 className="card-title fs-6">IT Consulting</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card h-100">
              <div className="card-body">
                <i className="fa-solid fa-database fa-3x mb-3 text-primary"></i>
                <h5 className="card-title fs-6">Datacenter Solutions</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-2">
            <div className="card text-center shadow custom-card h-100">
              <div className="card-body">
                <i className="fa-solid fa-chalkboard-user fa-3x mb-3 text-success"></i>
                <h5 className="card-title fs-6">Professional Services</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <p className="small-header text-uppercase text-center">
          <b>our mission and vision</b>
        </p>
        <p className="fs-3 text-center">
          <b>Guiding Your Digital Transformation</b>
        </p>
        <div className="row g-4">
          <div className="col-12 col-md-6 d-flex">
            <div className="card text-center shadow flex-grow-1">
              <div className="card-body">
                <h5 className="card-title">Our Mission</h5>
                <p className="card-text px-3" style={{ textAlign: "justify" }}>
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
          <div className="col-12 col-md-6 d-flex">
            <div className="card text-center shadow flex-grow-1">
              <div className="card-body">
                <h5 className="card-title">Our Vision</h5>
                <p className="card-text px-3" style={{ textAlign: "justify" }}>
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
          <Link
            to={"/contact-us"}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn mb-4"
          >
            <span>Contact Us Now</span>
          </Link>
        </div>
      </div>
      <div className="container my-5">
        <div className="custom-div">
          <p className="small-header text-uppercase text-center">
            <b>why choose us</b>
          </p>
          <p className="fs-3 text-center">
            <b>Why Should Our IT Solutions</b>
          </p>
          <p className="pb-4" style={{ textAlign: "justify" }}>
            At our core, we are dedicated to delivering tailored IT solutions
            that empower businesses to thrive in the digital age. With a team of
            experienced professionals, we bring expertise in modern
            technologies, seamless integration, and robust security to every
            project. Our commitment to innovation ensures we stay ahead of
            industry trends, providing scalable and future-proof solutions. By
            understanding your unique needs, we craft strategies that enhance
            efficiency, drive growth, and maximize ROI. Trust us to be your
            technology partner, offering reliable support and personalized
            services that exceed expectations. Choose us for IT solutions that
            turn challenges into opportunities.
          </p>
        </div>
        <div className="row g-4">
          <div className="col-12 col-md-4 ">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <i className="fa-solid fa-building-circle-check fa-3x mb-3 text-primary"></i>
                <h5 className="card-title">Trusted Company</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Trust is the foundation of our success and the hallmark of our
                  reputation. As a trusted company, we are committed to
                  delivering excellence in every interaction, prioritizing
                  transparency, integrity, and reliability. Our proven track
                  record of successful projects and satisfied clients reflects
                  our dedication to quality and long-term partnerships.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <i className="fa-solid fa-network-wired fa-3x mb-3 text-primary"></i>
                <h5 className="card-title">Strong Network</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Our company thrives on the strength of its robust network,
                  which spans industries, technologies, and global markets.
                  Built on a foundation of strategic partnerships, expert
                  collaborations, and a dedicated team, our network enables us
                  to deliver innovative and comprehensive solutions to our
                  clients.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="card text-center shadow h-100">
              <div className="card-body">
                <i className="fa-solid fa-laptop-code fa-3x mb-3 text-primary"></i>
                <h5 className="card-title">Quality Products</h5>
                <p className="card-text" style={{ textAlign: "justify" }}>
                  Our commitment to excellence drives us to deliver products of
                  the highest quality, tailored to meet your unique needs. From
                  initial design to final implementation, every step of our
                  process is guided by meticulous attention to detail and
                  adherence to industry standards. We leverage cutting-edge
                  technology, rigorous testing, and expert craftsmanship to
                  ensure our products are reliable, efficient, and built to
                  last.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
