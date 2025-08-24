import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
  return (
    <div>
      <footer className="bg-dark text-white pt-3 pb-2 mt-0">
      <div className="container">
        <div className="row align-items-center text-center text-md-start">
          
          {/* Left: Logo / Name */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="mb-0">Raghavendra Kashyap</h5>
            <p className="small">Full Stack Java Developer</p>
          </div>

          {/* Center: Links */}
          <div className="col-md-4 mb-3 mb-md-0">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-start gap-3 mb-0">
              <li><a href="#home" className="text-white text-decoration-none">Home</a></li>
               <li><a href="#home" className="text-white text-decoration-none">About</a></li>
              <li><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Right: Social Media Icons */}
          <div className="col-md-4">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <i className="bi bi-linkedin"></i>
              </a>
              
              <a href="mailto:your-email@example.com" className="text-white fs-5">
                <i className="bi bi-envelope"></i>
              </a>
             
              <a href="https://github.com/2003raghav" target="_blank" rel="noopener noreferrer" className="text-white fs-5">
                <i className="bi bi-github "></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="bg-light my-3" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Raghavendra Kashyap. All rights reserved.
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
