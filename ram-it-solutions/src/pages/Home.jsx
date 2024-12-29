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
            <img
              src="/img1.jpg"
              className="d-block w-100 "
              alt="img1"
              style={{ height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img2.jpg"
              className="d-block w-100 "
              alt="img2"
              style={{ height: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/img3.jpg"
              className="d-block w-100 "
              alt="img3"
              style={{ height: "500px" }}
            />
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
        <h1>Introduction</h1>
        <p
          style={{
            textAlign: "justify",
          }}
        >
          Welcome to [Company Name], a forward-thinking IT solutions provider
          committed to driving digital transformation for businesses of all
          sizes. Founded in [Year], we specialize in delivering innovative,
          efficient, and scalable technology services that empower our clients
          to thrive in today’s competitive digital landscape. Our expertise
          spans a wide range of services, including software development, IT
          consulting, cloud computing, cybersecurity, and data analytics. By
          leveraging the latest technologies and industry best practices, we
          create customized solutions that address unique business challenges
          and unlock growth opportunities. At [Company Name], we believe in
          fostering long-term partnerships by delivering exceptional value,
          maintaining transparency, and prioritizing customer satisfaction. With
          a team of highly skilled professionals and a passion for innovation,
          we have successfully collaborated with organizations across various
          industries, including healthcare, finance, education, and retail. Our
          Mission: To empower businesses by providing cutting-edge technology
          solutions that enhance efficiency, drive innovation, and deliver
          measurable results. Our Vision: To be a global leader in IT services,
          recognized for our commitment to excellence, innovation, and
          sustainability. With a strong focus on quality, integrity, and
          collaboration, [Company Name] is dedicated to helping you achieve your
          business goals and staying ahead in the digital age.
        </p>
      </div>
      
    </>
  );
};

export default Home;
