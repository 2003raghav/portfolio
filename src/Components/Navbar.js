import Myimage from "../Images/Myimage.jpg";

function Navbar({
  onHomeClick,
  onAboutClick,
  onProjectsClick,
  onContactClick,
}) {
  return (
    <nav className="site-navbar navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid mx-1 mx-md-4 mx-lg-5">
        {/* Brand */}
        <button
          className="navbar-brand btn btn-link d-flex align-items-center gap-2 p-0"
          onClick={onHomeClick}
        >
          <img
            src={Myimage}
            alt="Raghavendra Kashyap"
            className="rounded-circle"
            width="38"
            height="38"
            style={{
              objectFit: "cover",
              border: "2px solid rgba(21,169,154,0.5)",
            }}
          />
          <span className="fw-bold brand-name">
            <span className="brand-mark">&lt;RK/&gt;</span>
            Raghavendra Kashyap
          </span>
        </button>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="ms-auto d-flex flex-column flex-lg-row gap-3 gap-lg-4 mt-3 mt-lg-0">
            <button className="nav-link btn btn-link" onClick={onHomeClick}>
              Home
            </button>
            <button className="nav-link btn btn-link" onClick={onAboutClick}>
              About
            </button>
            <button className="nav-link btn btn-link" onClick={onProjectsClick}>
              Projects
            </button>
            <button className="nav-link btn btn-link" onClick={onContactClick}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
