import React from 'react';
import coverImage from '../Images/CoverPage.png';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Sections({ homeRef, aboutRef, projectsRef, contactRef, onProjectsClick }) {
  return (
    <div>
      {/* ================= HOME SECTION ================= */}
      <div ref={homeRef}>
        <div
          className="text-center position-relative px-3 d-flex flex-column justify-content-center align-items-center"
          style={{
            minHeight: '100vh',
            backgroundImage: `url(${coverImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0 6px 20px rgba(235, 229, 221, 0.8)',
          }}
        >
          <h1
            className="fw-bold m-5 px-2"
            style={{ fontFamily: 'cursive', fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            HI I'M RAGHAVENDRA KASHYAP
          </h1>

          <p className="fs-6 fs-md-5 px-3 text-center">
            Full Stack Java Developer with expertise in building robust backend systems and
            <br className="d-none d-md-block" />
            dynamic frontend interfaces using modern web technologies
          </p>

          <button
            className="m-4 btn btn-outline-primary shadow px-4 px-md-5 py-2 py-md-3"
            style={{ fontSize: '1rem' }}
            onClick={onProjectsClick}
          >
            Projects
          </button>

          {/* Left Sidebar (Desktop only) */}
          <div
            className="position-fixed d-none d-lg-flex flex-column align-items-center justify-content-center bg-white social-sidebar"
            style={{
              top: '30%',
              left: 0,
              width: '50px',
              height: '40vh',
              zIndex: 1050,
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
              boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
            }}
          >
            <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="my-2 text-dark">
              <i className="bi bi-linkedin fs-4"></i>
            </a>
            <a href="https://www.instagram.com/your-profile" target="_blank" className="my-2 text-dark">
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a href="mailto:your-email@example.com" className="my-2 text-dark">
              <i className="bi bi-envelope fs-4"></i>
            </a>
            <a href="https://facebook.com" target="_blank" className="my-2 text-dark">
              <i className="bi bi-facebook fs-4"></i>
            </a>
          </div>

          {/* Bottom Bar (Mobile/Tablet only) */}
          <div
            className="position-fixed d-flex d-lg-none justify-content-center bg-white w-100 py-2"
            style={{
              bottom: 0,
              left: 0,
              borderTop: '1px solid #ddd',
              boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
              zIndex: 1050,
            }}
          >
            <a href="https://www.linkedin.com/in/your-profile" className="mx-3 text-dark">
              <i className="bi bi-linkedin fs-5"></i>
            </a>
            <a href="https://www.instagram.com/your-profile" className="mx-3 text-dark">
              <i className="bi bi-instagram fs-5"></i>
            </a>
            <a href="mailto:your-email@example.com" className="mx-3 text-dark">
              <i className="bi bi-envelope fs-5"></i>
            </a>
            <a href="https://facebook.com" className="mx-3 text-dark">
              <i className="bi bi-facebook fs-5"></i>
            </a>
          </div>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div
        ref={aboutRef}
        className="text-center position-relative px-3 d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #ebe5dd 0%, #ffffff 100%)',
          boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.05)',
        }}
      >
        <h1 className="fs-2 fs-md-1">About Section</h1>
      </div>

      {/* ================= PROJECT SECTION ================= */}
      <div
        ref={projectsRef}
        className="text-center position-relative px-3 d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom,#ffffff 0%,#ebe5dd 100%)',
          boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.05)',
        }}
      >
        <h1 className="fs-2 fs-md-1">Projects Section</h1>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div ref={contactRef} 
      className="text-center position-relative px-3 d-flex flex-column justify-content-center align-items-center"
      style={{minHeight: '100vh',
              backgroundImage: `url(${coverImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.1)',
              }}
        >
        <form
          className="w-100 w-sm-80 w-md-75 w-lg-60 h-auto p-4 p-md-5 shadow bg-white rounded mx-auto"
          style={{ maxWidth: 600, minWidth: 280 }}
        >
          <h1 className="mb-4 fs-3">Contact Me!</h1>

          <div className="mb-3">
            <label htmlFor="exampleInputName1" className="form-label fw-bold">Name</label>
            <input type="text" className="form-control" id="exampleInputName1" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail" className="form-label fw-bold">Email</label>
            <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text fw-bold">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputMessage" className="form-label fw-bold">Message</label>
            <textarea className="form-control" id="exampleInputMessage" rows="3"></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-50 w-sm-auto px-5">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sections;
