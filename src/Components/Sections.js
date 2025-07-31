import React, { useRef } from 'react';
import Navbar from './Navbar';
import coverImage from '../Images/CoverPage.png';


function Sections({ homeRef, aboutRef, projectsRef, contactRef ,onProjectsClick}) {

    return (
    <>
      <div ref={homeRef} className='text-center' style={{ height: '90vh', paddingTop: '80px' , backgroundImage: `url(${coverImage})`,backgroundRepeat: 'no-repeat'}}>
        <h1 className='fw-bolder m-5 px-2' style={{fontFamily:'cursive',fontSize: 'clamp(1.8rem, 5vw, 3rem)'}}>HI I'M RAGHAVENDRA KASHYAP</h1>
        <p className='fs-5 px-3 ' >Full Stack Java Developer with expertise in building robust backend systems and <br></br> dynamic frontend interfaces using modern web technologies</p>
        <button className='m-5 btn btn-outline-primary ' style={{padding:'15px 60px ',fontSize:'1rem'}} onClick={onProjectsClick}>Projects</button>
      </div>
      <div ref={aboutRef} style={{ height: '100vh', paddingTop: '80px', backgroundColor: '#00b894' }}>
        <h1>About Section</h1>
      </div>
      <div ref={projectsRef} style={{ height: '100vh', paddingTop: '80px', backgroundColor: '#0984e3' }}>
        <h1>Projects Section</h1>
      </div>
      <div ref={contactRef} style={{ height: '100vh', paddingTop: '80px', backgroundColor: '#d63031' }}>
        <h1>Contact Section</h1>
      </div>
    </>
  );
}

export default Sections;
