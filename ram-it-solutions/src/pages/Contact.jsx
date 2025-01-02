import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm( 
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setStatus("Email Sent Successfully!");
          setLoading(false); 
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setStatus("Error in sending Email!");
          setLoading(false);
        }
      );
  };

  return (
    <>
      <div className="container my-5">
        <div className="row contact_row">
          {/* Contact Information Section */}
          <div className="col-md-6 mb-4 px-2">
            <h2>Contact Us:</h2>
            <p>If you have any questions, feel free to reach out to us:</p>
            <img src="./logo.png" alt="logo" height={"150px"} />
            <ul className="list-unstyled">
              <li>
                <i className="fa-solid fa-envelope me-2"></i>
                <strong>Email:</strong>{" "}
                <Link
                  className="text-decoration-none"
                  to="mailto:ramitsolution1@gmail.com"
                >
                  ramitsolution1@gmail.com
                </Link>
              </li>
              <li>
                <i className="fa-solid fa-mobile-retro me-2"></i>
                <strong>Phone:</strong> +91-8445516673
              </li>
              <li>
                <i className="fa-solid fa-location-dot me-2"></i>
                <strong>Address:</strong> 120, Karanpur, Near Survey Chowk
                <br />
                Dehradun - 248001, India
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="col-md-6 px-2">
            <h3>Send Us a Message:</h3>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="user_name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="user_email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea className="form-control" name="message" required />
              </div>
              <button type="submit" className="btn btn-primary" disabled={loading}>
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {status && <p className="mt-3 text-success">{status}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
