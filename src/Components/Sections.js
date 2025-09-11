import React from 'react';
import coverImage from '../Images/CoverPage.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import bank from '../Images/bank.jpg';
import Portfolio from '../Images/Portfolio.png';
import Servicefront from '../Images/Servicefront.png'
import Serviceback from '../Images/Serviceback.png'
import ResumePDF from '../Images/Raghavendra_Kashyap_CB(1MJ22IS085).pdf';
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function Sections({ homeRef, aboutRef, projectsRef, contactRef, onProjectsClick }) {
   const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        createdAt: serverTimestamp(),
      });

      alert("✅ Message submitted successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Error adding document: ", err);
      alert("❌ Something went wrong.");
    }
  };
  return (
    <div>
      {/* ================= HOME SECTION ================= */}
          <div ref={homeRef}>
            <div
              className="position-relative d-flex flex-column justify-content-center align-items-center p-3 p-md-4 p-lg-5"
              style={{
                minHeight: 'auto', // full viewport height
                backgroundImage: `url(${coverImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: '0 6px 20px rgba(235, 229, 221, 0.8)',
              }}
            >
              <h1
                className="fw-bold p-1 p-md-3 m-lg-4 m-5 m-md-5 mt-lg-5 text-center"
                style={{ fontFamily: 'cursive', fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}
              >
                HI I'M RAGHAVENDRA KASHYAP
              </h1>

              <p className="fs-4 fs-md-4 fs-lg-3 p-2 p-md-3 text-center">
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

             <i className="bi bi-chevron-double-down fs-1 m-3 m-md-4 m-lg-5"></i>


              {/* Left Sidebar (Desktop only) */}
              <div
                className="position-absolute d-none d-lg-flex flex-column align-items-center justify-content-center bg-white py-3"
                style={{
                  left: 0,
                  top: '40%',
                  transform: 'translateY(-50%)',
                  width: '50px',
                  height: 'auto',
                  borderTopRightRadius: '10px',
                  borderBottomRightRadius: '10px',
                  boxShadow: '4px 4px 8px rgba(0,0,0,0.1)',
                  zIndex: 1050,
                }}
              >
                <a href="https://www.linkedin.com/in/raghavendra-kashyap-c-b-05372b261/" target="_blank" className="my-2 text-dark">
                  <i className="bi bi-linkedin fs-4"></i>
                </a>
               
                <a href="mailto:rkahyap2003@gmail.com" className="my-2 text-dark">
                  <i className="bi bi-envelope fs-4"></i>
                </a>
                
                <a href="https://github.com/2003raghav" target="_blank" className="my-2 text-dark">
                  <i className="bi bi-github fs-3"></i>
                </a>
                <a href="https://www.instagram.com/rkashyap2003/" target="_blank" className="my-2 text-dark">
                  <i className="bi bi-instagram fs-4"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100081586262153" target="_blank" className="my-2 text-dark">
                  <i className="bi bi-facebook fs-4"></i>
                </a>
              </div>

              {/* Bottom Bar (Mobile/Tablet only) */}
              <div
                className="position-relative d-flex d-lg-none justify-content-center  align-items-center bg-white w-100 py-2 mt-2 mt-md-3"
                style={{
                  top: '100%',
                  left: 0,
                  borderTop: '1px solid #ddd',
                  boxShadow: '0 -2px 6px rgba(0,0,0,0.1)',
                  zIndex: 1050,
                }}
              >
                <a href="https://www.linkedin.com/in/raghavendra-kashyap-c-b-05372b261/" className="mx-3 text-dark">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
                
                <a href="mailto:rkahyap2003@gmail.com" className="mx-3 text-dark">
                  <i className="bi bi-envelope fs-5"></i>
                </a>
               
                <a href="https://github.com/2003raghav" className="mx-3 text-dark">
                  <i className="bi bi-github fs-5"></i>
                </a>
                <a href="https://www.instagram.com/rkashyap2003/" target="_blank" rel="noopener noreferrer"className="mx-3 text-dark">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100081586262153" className="mx-3 text-dark">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
              </div>
            </div>
          </div>


          {/* ================= ABOUT SECTION ================= */}
            <div
  ref={aboutRef}
  className="position-relative d-flex flex-column bg-light "
  style={{
    minHeight: 'auto',
    boxShadow: 'inset 0 10px 20px rgba(0,0,0,0.05)',
    background: 'linear-gradient(to bottom, #ebe5dd 0%, #ffffff 100%)',
  }}
>
  {/* Heading */}
  <h1 className="text-center py-5 fw-bold text-dark ">
    ABOUT ME
    <div className="mx-auto bg-primary mt-3" style={{ height: "4px", width: "25%" }}></div>
  </h1>

  {/* Content */}
  <div className="container pb-5 ">
    <div className="row g-4">

      {/* Left Column - About Text */}
      <div className="col-md-7">
        <div className="card shadow-sm border-0 rounded-4 h-100 border-primary">
          <div className="card-body p-4">
            <h2 className="fw-bold text-primary mb-3" style={{ fontFamily: "cursive" }}>
              Hello 👋
            </h2>

            <p className="fs-5 lh-lg text-muted">
              I am a <span className="fw-bold text-primary">Full-Stack Developer</span> with a strong focus on
              building responsive and user-friendly <b>Frontend</b> applications, while also developing
              scalable <b>Backend</b> solutions using <span className="fw-bold text-primary">Java</span> and
              <span className="fw-bold text-success">Spring Boot</span>. Experienced in Websites, Web Applications, 
              and IoT projects using <span className="fw-bold text-warning">ESP32</span> with real-time Firebase integration.
            </p>

            <p className="fs-5 lh-lg text-muted">
              I enjoy sharing knowledge and contributing to the developer community through projects and discussions. 
              Connect with me on{" "}
              <a
                href="https://www.linkedin.com/in/raghavendra-kashyap-c-b-05372b261/"
                className="fw-bold text-decoration-none text-primary"
              >
                LinkedIn
              </a>{" "}
              where I share content about Web Development, Programming, and IoT.
            </p>

            <p className="fs-5 lh-lg text-muted">
              I am open to exciting opportunities where I can contribute, learn, and grow. If you have a role matching my skills, feel free to{" "}
              <span className="fw-bold text-dark">reach out</span>.
            </p>

            {/* CTA Button */}
            <a
              href={ResumePDF} 
              className="btn btn-primary btn-lg rounded-pill mt-3 shadow"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Right Column - Skills & Education */}
      <div className="col-md-5 d-flex flex-column gap-4">
        
        {/* Skills Section */}
        <div className="card shadow-sm border  rounded-4 h-auto text-center">
          <div className="card-body p-4">
            <h2 className="fw-bold text-success mb-4" style={{ fontFamily: "cursive" }}>
              Skills
            </h2>

            <div className="d-flex flex-wrap justify-content-center gap-2">
              {[
                "Java",
                "HTML",
                "CSS",
                "Spring Boot",
                "MySQL",
                "JavaScript",
                "RESTful APIs",
                "React.js",
                "Bootstrap",
                "Firebase",
                "ESP32",
                "GitHub",
              ].map((skill, index) => (
                <span
                  key={index}
                  className="badge rounded-pill text-bg-light border border-primary px-3 py-2 fs-6 fw-semibold shadow-sm"
                  style={{ width:'150px' }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

       {/* Education Section */}
        <div className="card shadow-sm border rounded-4 h-auto text-start" >
          <div className="card-body p-4">
            <h2 className="fw-bold text-primary mb-4 text-center" style={{ fontFamily: "cursive" }}>
              Education
            </h2>
            <ul className="list-unstyled fs-6 lh-lg">
              <li className="mb-2">
                <strong>Bachelor of Engineering (CSE)</strong><br />
                MVJ College of Engineering, 2022-2026 | 8.3 CGPA
              </li>
              <li className="mb-2">
                <strong>12th Standard</strong><br />
                St Mary’s PU College, 2020-2022 | 94.3%
              </li>
              <li className="mb-2">
                <strong>10th Standard</strong><br />
                St Mary’s PU College, 2019-2020 | 92.8%
              </li>
            </ul>
          </div>
        </div>


      </div>

    </div>
  </div>
</div>


                {/* ================= PROJECT SECTION ================= */}
      <div
        ref={projectsRef}
        className="text-center position-relative px-3 d-flex flex-column justify-content-center align-items-center bg-light"
        style={{
          minHeight: "auto",
          background: 'linear-gradient(to bottom,#ffffff 0%,#ebe5dd 100%)',
          boxShadow: "inset 0 10px 20px rgba(0,0,0,0.05)",
        }}
      >
        <h1 className="fs-2 fw-bold mt-5">My Projects</h1>
        <div className="mx-auto bg-primary mt-2 mb-5 rounded" style={{ height: "4px", width: "25%" }}></div>

        <div className="container">
          <div className="row g-4 mb-5">



              {/* Project Card 1 */}
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={bank}
                    className="card-img-top"
                    alt="Bank Management System"
                    style={{height: "200px" ,    
                    width: "100%"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">Bank Management System</h5>
                    <p className="card-text text-muted flex-grow-1">
                      Manages account holder details and transactions. Built with Java Swing, JDBC, MySQL.
                    </p>
                    <a
                      href="https://github.com/2003raghav/Bank-Management-System" className="btn btn-outline-primary mt-auto w-100">
                      🔗 View Project
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Card 2 */}
              <div className="col-md-4 col-sm-6 mb-4">
                <div className="card h-100 shadow-sm border-0">
                  <img
                    src={Portfolio}
                    className="card-img-top"
                    alt="Portfolio"
                    style={{height: "200px" ,     
                    width: "100%"}}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold">Portfolio Project</h5>
                    <p className="card-text text-muted flex-grow-1">
                      Portfolio website showcasing projects built with Java, JavaScript, React, MySQL, and Firebase, highlighting my skills and experience
                    </p>
                    <a href="https://github.com/2003raghav/portfolio" className="btn btn-outline-primary mt-auto w-100">
                      🔗 View Project
                    </a>
                  </div>
                </div>
              </div>


            {/* Project Card 3 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img src={Servicefront}
                 className="card-img-top img-fluid" 
                 alt="Frontend website" 
                 style={{height:"200px",
                  width: "100%"
                 }}/>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Vehicle Service Management Frontend</h5>
                  <p className="card-text text-muted flex-grow-1">
                    Responsive website to maintain vehicle service using React and Bootstrap.
                  </p>
                  <a href="https://github.com/2003raghav/Vehicle-service-management--dr.vehicle" className="btn btn-outline-primary mt-auto w-100">
                    🔗 View Project (Ongoing)
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 */}
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 shadow-sm border-0">
                <img src={Serviceback} 
                className="card-img-top img-fluid" 
                alt="Backend site"
                style={{height:200,
                  width: "100%"
                }} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">Vehicle Service Management Backend</h5>
                  <p className="card-text text-muted flex-grow-1">
                    Backend code using Java Spring Boot using JPA.
                  </p>
                  <a href="https://github.com/2003raghav/DrVehicle_Backend" className="btn btn-outline-primary mt-auto w-100">
                    🔗 View Project (Ongoing)
                  </a>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div
        ref={contactRef}
        className="position-relative px-3 d-flex flex-column justify-content-center align-items-center"
        style={{
          minHeight: "auto",
          backgroundImage: `url(${coverImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          boxShadow: "inset 0 10px 20px rgba(0,0,0,0.1)",
        }}
      >
        <form
          className="w-100 w-sm-80 w-md-75 w-lg-60 h-auto p-4 p-md-5 shadow bg-white rounded mx-auto m-5"
          style={{ maxWidth: 600, minWidth: 280 }}
          onSubmit={handleSubmit}
        >
          <h1 className="mb-4 fs-3 text-center">Contact Me!</h1>

          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-bold">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              required
              style={{
                background: "linear-gradient(to bottom, #ebe5dd 0%, #ffffff 100%)",
              }}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-bold">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              required
              style={{
                background: "linear-gradient(to bottom, #ebe5dd 0%, #ffffff 100%)",
              }}
            />
            <div id="emailHelp" className="form-text fw-bold">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label fw-bold">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              required
              style={{
                background: "linear-gradient(to bottom, #ebe5dd 0%, #ffffff 100%)",
              }}
            ></textarea>
          </div>

          <div className="text-center px-4 p-3">
            <button type="submit" className="btn btn-primary w-50 w-sm-auto">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sections;
