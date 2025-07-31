import Myimage from '../Images/Myimage.jpg';

function Navbar({onHomeClick, onAboutClick, onProjectsClick, onContactClick}) {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary  "> 
    <div className="container-fluid d-flex align-items-center">
        <div className='navbar-brand d-flex align-items-center gap-2'>
            <img src={Myimage} alt='MyImage' className='rounded-circle 'width="40" height="40" style={{objectFit:'cover'}}/>
            <button className='nav-link btn btn-link 'onClick={onHomeClick}><h5 className='fw-bold' style={{fontFamily:'cursive'}}>Raghavendra Kashyap</h5></button>
        </div>
        
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          
            <div className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-4 mt-3 mt-lg-0">
                <button className="nav-link btn btn-link" onClick={onHomeClick}><h5>Home</h5></button>
                <button className="nav-link btn btn-link" onClick={onAboutClick}><h5>About</h5></button>
                <button className="nav-link btn btn-link" onClick={onProjectsClick}><h5>Projects</h5></button>
                <button className="nav-link btn btn-link" onClick={onContactClick}><h5>Contact</h5></button>
            </div>
            
        </div>
       
    </div>
    </nav>
      
    </div>
  )
}

export default Navbar
