const AboutUs = () => {
  return (
    <>
      <div className="container my-5">
        {/* Introduction Section */}
        <section className="text-center my-5 custom-div">
          <p className="small-header text-uppercase"><b>Who We Are</b></p>
          <p className='fs-3'>
            <b>We are dedicated to empowering businesses through innovative technology solutions.</b>
          </p>
          <p className="lead" style={{textAlign:'justify'}}>
            At Ram IT Solutions, we believe in the transformative power of technology. Since our inception, we have been committed to helping businesses navigate the digital landscape and achieve their goals through cutting-edge IT solutions. Our team is driven by passion, innovation, and a deep understanding of technology’s role in shaping the future.
          </p>
        </section>

        {/* Mission Section */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 px-4">
                <h3>Our Mission</h3>
                <p style={{ textAlign: "justify" }}>
                  Our mission is to deliver innovative, reliable, and scalable IT solutions that help businesses achieve long-term success. We strive to provide our clients with the best technology and services, ensuring they are always a step ahead in today’s fast-paced digital world. By embracing new ideas, fostering creativity, and building long-lasting relationships, we aim to drive business growth and optimize operational efficiency for our clients.
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center my-2">
                <img
                  src="/mission.jpg"
                  alt="mission"
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center my-2 order-1 order-md-0">
                <img
                  src="/vision.jpg"
                  alt="vision"
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-6 px-4">
                <h3>Our Vision</h3>
                <p style={{ textAlign: "justify" }}>
                  Our vision is to be a leading IT solutions provider, known for delivering innovative services that make a significant impact on businesses worldwide. We aim to revolutionize the way companies utilize technology, offering them tools to enhance performance, security, and competitiveness. We aspire to become the partner of choice for businesses looking to grow in an ever-evolving digital world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 px-4">
                <h3>Our Core Values</h3>
                <p style={{ textAlign: "justify" }}>
                  At Ram IT Solutions, we are guided by our core values, which define who we are and how we approach every project. These values include:
                  <ul>
                    <li><b>Innovation:</b> Embracing the latest technologies and ideas to provide unique and effective solutions.</li>
                    <li><b>Integrity:</b> Maintaining honesty, transparency, and trust in every interaction.</li>
                    <li><b>Excellence:</b> Striving for excellence in every project and ensuring high-quality results.</li>
                    <li><b>Collaboration:</b> Working together as a team and with our clients to achieve the best possible outcomes.</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center my-2">
                <img
                  src="/values.jpg"
                  alt="values"
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="my-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center align-items-center my-2 order-1 order-md-0">
                <img
                  src="/team.jpg"
                  alt="team"
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </div>
              <div className="col-md-6 px-4">
                <h3>Meet Our Team</h3>
                <p style={{ textAlign: "justify" }}>
                  Our team is composed of experienced professionals with diverse backgrounds in IT, business, and design. We work collaboratively to deliver outstanding solutions that meet the unique needs of each client. We are united by our commitment to innovation, excellence, and customer satisfaction. Each member of our team brings valuable expertise to the table, ensuring that we are always equipped to tackle new challenges and provide top-tier service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-light py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 px-4">
                <h3>Why Choose Us?</h3>
                <p style={{ textAlign: "justify" }}>
                  At Ram IT Solutions, we pride ourselves on offering personalized and reliable IT services tailored to your specific needs. Here’s why you should choose us:
                  <ul>
                    <li><b>Customer-Centric Approach:</b> We put your business needs at the forefront of everything we do.</li>
                    <li><b>Expertise and Experience:</b> Our team is highly skilled and experienced in the latest technologies.</li>
                    <li><b>Tailored Solutions:</b> We create solutions that are customized to fit your business goals and objectives.</li>
                    <li><b>Proven Track Record:</b> We have a history of delivering successful projects for businesses of all sizes.</li>
                  </ul>
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center align-items-center my-2">
                <img
                  src="/why-choose.jpg"
                  alt="why-choose"
                  className="img-fluid rounded"
                  style={{ maxHeight: "300px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AboutUs;
