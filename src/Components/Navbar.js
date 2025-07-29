import Myimage from '../Images/Myimage.jpg';

function Navbar({onHomeClick, onAboutClick, onProjectsClick, onContactClick}) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex">
    <div className="container-fluid d-flex justify-content-around align-items-center">
        <div className='navbar-brand d-flex align-item-center gap-3'>
            <img src={Myimage} alt='MyImage' className='rounded-circle  mb-0'width="35" height="35" style={{objectFit:'cover'}}/>
            <h5 className='navbar-brand mb-0'>Raghavendra Kashyap</h5>
        </div>
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          
            <div className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-4 mt-3 mt-lg-0">
                <button className="nav-link btn btn-link" onClick={onHomeClick}>Home</button>
                <button className="nav-link btn btn-link" onClick={onAboutClick}>About</button>
                <button className="nav-link btn btn-link" onClick={onProjectsClick}>Projects</button>
                <button className="nav-link btn btn-link" onClick={onContactClick}>Contact</button>
            </div>
            
        </div>
       
    </div>
    </nav>
      
    </div>
  )
}

export default Navbar
