import React, { useRef, useState, useEffect } from "react";
import coverImage from "../Images/CoverPage.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import bank from "../Images/bank.jpg";
import Portfolio from "../Images/Portfolio.png";
import Servicefront from "../Images/Servicefront.png";
import Serviceback from "../Images/Serviceback.png";
import quiz from "../Images/Quiz.png";
import health from "../Images/Health.png";
import ResumePDF from "../Images/Raghavendra_Kashyap_resume.pdf";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

/* Lightweight scroll-reveal wrapper — fades content up once when it
   enters the viewport. Respects prefers-reduced-motion via CSS. */
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

const SKILL_GROUPS = [
  { label: "Languages", skills: ["Java", "Python", "JavaScript"] },
  {
    label: "Frontend",
    skills: ["HTML5", "CSS3", "React.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    label: "Backend",
    skills: ["Spring Boot", "RESTful APIs", "JDBC", "JPA", "Spring AI"],
  },
  { label: "Databases", skills: ["MySQL", "Oracle DB"] },
  { label: "Tools & Platforms", skills: ["Firebase", "GitHub", "ESP32"] },
];

const PROJECTS = [
  {
    image: bank,
    title: "Bank Management System",
    status: "stable",
    description: "Manages account holder details and transactions end-to-end.",
    tech: ["Java Swing", "JDBC", "MySQL"],
    link: "https://github.com/2003raghav/Bank-Management-System",
  },
  {
    image: Portfolio,
    title: "Portfolio Project",
    status: "stable",
    description:
      "Personal portfolio site showcasing projects, skills, and experience.",
    tech: ["Java", "React.js", "Firebase"],
    link: "https://github.com/2003raghav/portfolio",
  },
  {
    image: Servicefront,
    title: "Vehicle Service Management",
    status: "stable",
    description: "Responsive platform for tracking vehicle service records.",
    tech: ["Spring Boot", "React.js", "Tailwind CSS", "Oracle SQL"],
    link: "https://github.com/2003raghav/Vehicle-service-management--dr.vehicle",
  },
  {
    image: quiz,
    title: "Quiz Master",
    status: "stable",
    description:
      "A RESTful quiz application for managing quizzes and answers, with AI-assisted question generation.",
    tech: ["Spring Boot", "React.js", "Oracle SQL", "Gemini AI"],
    link: "https://github.com/2003raghav/Quiz_Master",
  },
  {
    image: health,
    title: "Health Monitoring System",
    status: "progress",
    description:
      "A family-centric health platform for tracking records and check-ups.",
    tech: ["Spring Boot", "React.js", "Oracle SQL", "Tailwind CSS"],
    link: "https://github.com/2003raghav/Health_monitoring_app",
  },
];

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdyS1b4FwCM1UCsOhAG34Vwoe07ObAa-zwOxBxIMyZoHpC45Q/formResponse";

const GOOGLE_FORM_FIELDS = {
  name: "entry.1392855392",
  email: "entry.1168363693",
  message: "entry.77530669",
};

function Sections({
  homeRef,
  aboutRef,
  projectsRef,
  contactRef,
  onProjectsClick,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    // Submit to Google Forms (fire-and-forget — no-cors means we can't
    // read the response, but the data still reaches the linked Sheet)
    try {
      const formData = new FormData();
      formData.append(GOOGLE_FORM_FIELDS.name, name);
      formData.append(GOOGLE_FORM_FIELDS.email, email);
      formData.append(GOOGLE_FORM_FIELDS.message, message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      alert("✅ Message submitted successfully!");
      e.target.reset();
    } catch (err) {
      console.error("Error submitting to Google Form: ", err);
      alert("❌ Something went wrong.");
    }
  };

  return (
    <div>
      {/* ================= HOME SECTION ================= */}
      <div ref={homeRef}>
        <div
          className="hero-section position-relative d-flex flex-column justify-content-center align-items-center p-3 p-md-4 p-lg-5"
          style={{
            minHeight: "92vh",
            backgroundImage: `url(${coverImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="hero-content text-center px-2">
            <span className="eyebrow eyebrow--on-ink justify-content-center">
              // PORTFOLIO · 2026
            </span>

            <h1 className="hero-name">HI, I'M RAGHAVENDRA KASHYAP</h1>

            <span className="hero-terminal">
              &gt; Full-Stack Java Developer building backend systems and
              responsive frontends.
              <span className="cursor-blink" aria-hidden="true"></span>
            </span>

            <p className="hero-stack mb-4">
              Spring Boot · React.js · MySQL · Spring AI
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <button className="btn-trace" onClick={onProjectsClick}>
                View Projects
              </button>
              <a href={ResumePDF} target="_blank" rel="noopener noreferrer">
                <button className="btn-ghost-copper">Download Résumé</button>
              </a>
            </div>

            <div className="status-line">
              <span className="status-dot"></span>
              Available for new opportunities — Bengaluru, IN
            </div>
          </div>

          {/* Left Sidebar (Desktop only) */}
          <div
            className="hero-rail position-absolute d-none d-lg-flex flex-column align-items-center justify-content-center py-3"
            style={{
              left: 0,
              top: "40%",
              transform: "translateY(-50%)",
              width: "52px",
              height: "auto",
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
              zIndex: 2,
            }}
          >
            <a
              href="https://www.linkedin.com/in/raghavendra-kashyap-c-b-05372b261/"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin fs-4"></i>
            </a>

            <a
              href="mailto:rkahyap2003@gmail.com"
              className="my-2"
              aria-label="Email"
            >
              <i className="bi bi-envelope fs-4"></i>
            </a>

            <a
              href="https://github.com/2003raghav"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2"
              aria-label="GitHub"
            >
              <i className="bi bi-github fs-3"></i>
            </a>
            <a
              href="https://www.instagram.com/rkashyap2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram fs-4"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081586262153"
              target="_blank"
              rel="noopener noreferrer"
              className="my-2"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook fs-4"></i>
            </a>
          </div>

          {/* Bottom Bar (Mobile/Tablet only) */}
          <div
            className="hero-dock position-relative d-flex d-lg-none justify-content-center align-items-center w-100 py-3 mt-4"
            style={{ zIndex: 2 }}
          >
            <a
              href="https://www.linkedin.com/in/raghavendra-kashyap-c-b-05372b261/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              aria-label="LinkedIn"
            >
              <i className="bi bi-linkedin fs-5"></i>
            </a>

            <a
              href="mailto:rkahyap2003@gmail.com"
              className="mx-3"
              aria-label="Email"
            >
              <i className="bi bi-envelope fs-5"></i>
            </a>

            <a
              href="https://github.com/2003raghav"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              aria-label="GitHub"
            >
              <i className="bi bi-github fs-5"></i>
            </a>
            <a
              href="https://www.instagram.com/rkashyap2003/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram fs-5"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081586262153"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook fs-5"></i>
            </a>
          </div>
        </div>
      </div>

      {/* ================= ABOUT SECTION ================= */}
      <div ref={aboutRef} className="about-section position-relative py-5">
        <div className="container">
          <Reveal className="text-center mb-5">
            <span className="eyebrow eyebrow--on-paper justify-content-center">
              // ABOUT
            </span>
            <h1 className="section-heading text-dark">About Me</h1>
          </Reveal>

          <div className="row g-4">
            {/* Left Column - About Text */}
            <div className="col-md-7">
              <Reveal className="panel h-100" as="div">
                <div className="card-body p-4 p-lg-5">
                  <h2
                    className="fw-bold mb-3"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-paper)",
                    }}
                  >
                    Hello 👋
                  </h2>

                  <p className="bio-copy">
                    I'm a{" "}
                    <span className="accent-teal">full-stack developer</span>{" "}
                    who builds responsive, user-friendly{" "}
                    <strong>frontends</strong> and scalable{" "}
                    <strong>backends</strong> with{" "}
                    <span className="accent-teal">Java</span> and{" "}
                    <span className="accent-teal">Spring Boot</span>. I've also
                    shipped IoT projects on{" "}
                    <span className="accent-copper">ESP32</span> with real-time
                    Firebase integration.
                  </p>

                  <p className="bio-copy">
                    I enjoy sharing what I learn and contributing to the
                    developer community through projects and discussions —
                    connect with me on{" "}
                    <a
                      href="https://www.linkedin.com/in/raghavendra-kashyap-c-b-05372b261/"
                      className="accent-ink"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>{" "}
                    where I post about web development, programming, and IoT.
                  </p>

                  <p className="bio-copy mb-4">
                    I'm open to roles where I can contribute, learn, and grow —
                    if that sounds like a fit, reach out below.
                  </p>

                  <a
                    href={ResumePDF}
                    className="btn-trace"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Résumé
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column - Skills & Education */}
            <div className="col-md-5 d-flex flex-column gap-4">
              {/* Skills Section */}
              <Reveal className="panel" delay={100}>
                <div className="card-body p-4">
                  <h2
                    className="fw-bold mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-paper)",
                    }}
                  >
                    Skills
                  </h2>

                  <div className="d-flex flex-column gap-3">
                    {SKILL_GROUPS.map((group) => (
                      <div key={group.label}>
                        <div className="skill-group-title">{group.label}</div>
                        <div className="d-flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span key={skill} className="skill-tag">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Education Section */}
              <Reveal className="panel" delay={200}>
                <div className="card-body p-4">
                  <h2
                    className="fw-bold mb-4"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-paper)",
                    }}
                  >
                    Education
                  </h2>
                  <ul className="timeline">
                    <li>
                      <strong>Bachelor of Engineering (ISE)</strong>
                      <br />
                      <span>
                        MVJ College of Engineering, 2022–2026 · 8.52 CGPA
                      </span>
                    </li>
                    <li>
                      <strong>12th Standard</strong>
                      <br />
                      <span>St Mary's PU College, 2020–2022 · 94.3%</span>
                    </li>
                    <li>
                      <strong>10th Standard</strong>
                      <br />
                      <span>St Mary's PU College, 2019–2020 · 92.8%</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PROJECT SECTION ================= */}
      <div
        ref={projectsRef}
        className="projects-section position-relative px-3 py-5"
      >
        <div className="container">
          <Reveal className="text-center mb-5">
            <span className="eyebrow eyebrow--on-ink justify-content-center">
              // PROJECTS
            </span>
            <h1
              className="section-heading"
              style={{ color: "var(--text-ink)" }}
            >
              Selected Work
            </h1>
          </Reveal>

          <div className="row g-4">
            {PROJECTS.map((project, index) => (
              <Reveal
                key={project.title}
                className="col-md-6 col-lg-4"
                delay={index * 80}
              >
                <div className="project-card h-100 d-flex flex-column">
                  <div className="project-thumb">
                    <span
                      className={`status-badge ${
                        project.status === "stable"
                          ? "status-badge--stable"
                          : "status-badge--progress"
                      }`}
                    >
                      {project.status === "stable" ? "Stable" : "In progress"}
                    </span>
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="p-4 d-flex flex-column flex-grow-1">
                    <h5 className="project-title mb-2">{project.title}</h5>
                    <p className="project-desc flex-grow-1">
                      {project.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-source w-100"
                    >
                      ›_ View source
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ================= CONTACT SECTION ================= */}
      <div
        ref={contactRef}
        className="contact-section position-relative px-3 py-5 d-flex flex-column justify-content-center align-items-center"
      >
        <Reveal className="text-center mb-4">
          <span className="eyebrow eyebrow--on-paper justify-content-center">
            // CONTACT
          </span>
          <h1 className="section-heading text-dark">Let's Build Something</h1>
          <p className="bio-copy mx-auto" style={{ maxWidth: 480 }}>
            Have a role, project, or idea in mind? Send a message and I'll get
            back to you.
          </p>
        </Reveal>

        <Reveal
          className="contact-panel w-100 p-4 p-md-5 mx-auto"
          style={{ maxWidth: 600, minWidth: 280 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label-mono d-block mb-2">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-trace"
                id="name"
                name="name"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label-mono d-block mb-2">
                Email
              </label>
              <input
                type="email"
                className="form-control form-control-trace"
                id="email"
                name="email"
                required
              />
              <div id="emailHelp" className="form-help mt-2">
                We'll never share your email with anyone else.
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="form-label-mono d-block mb-2">
                Message
              </label>
              <textarea
                className="form-control form-control-trace"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn-trace w-50">
                Send Message
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

export default Sections;
