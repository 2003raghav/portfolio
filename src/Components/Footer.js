import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

function Footer({
  onHomeClick,
  onAboutClick,
  onProjectsClick,
  onContactClick,
}) {
  return (
    <footer className="site-footer pt-5 pb-3 mt-0">
      <div className="container">
        <div className="row align-items-start text-center text-md-start gy-4">
          {/* Left: Logo / Name */}
          <div className="col-md-4">
            <h5 className="mb-1">
              <span className="brand-mark">&lt;RK/&gt;</span> Raghavendra
              Kashyap
            </h5>
            <p className="footer-meta mb-0">
              Full-Stack Java Developer · Bengaluru, IN
            </p>
          </div>

          {/* Center: Links */}
          <div className="col-md-4">
            <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start gap-2 gap-md-4">
              <button
                className="footer-link btn btn-link p-0"
                onClick={onHomeClick}
              >
                Home
              </button>
              <button
                className="footer-link btn btn-link p-0"
                onClick={onAboutClick}
              >
                About
              </button>
              <button
                className="footer-link btn btn-link p-0"
                onClick={onProjectsClick}
              >
                Projects
              </button>
              <button
                className="footer-link btn btn-link p-0"
                onClick={onContactClick}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Right: Social Media Icons */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center justify-content-md-end gap-3 footer-social">
              <a
                href="https://www.linkedin.com/in/raghavendra-kashyap-c-b-05372b261/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>

              <a
                href="mailto:rkahyap2003@gmail.com"
                className="fs-5"
                aria-label="Email"
              >
                <i className="bi bi-envelope"></i>
              </a>

              <a
                href="https://github.com/2003raghav"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>

              <a
                href="https://www.instagram.com/rkashyap2003/"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5"
                aria-label="Instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100081586262153"
                target="_blank"
                rel="noopener noreferrer"
                className="fs-5"
                aria-label="Facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
        </div>

        <hr style={{ borderColor: "var(--ink-border)" }} className="my-4" />

        <div className="text-center footer-meta">
          © {new Date().getFullYear()} Raghavendra Kashyap. Built with React ·
          Designed with intent.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
