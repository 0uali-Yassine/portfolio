import React, { useState } from 'react';
import star from "../assets/Orange start.png";
import myImage from "../assets/Blur-face-01.png";
import { motion } from 'framer-motion';


function Home() {
    
    const [newPosition,setNewPosition] = useState({x:0,y:0});
    const onMousePostion = e =>{
        setNewPosition({x:e.clientX,y:e.clientY});
        console.log(e.clientX);
        console.log(e.clientY);
    }

    const onMousePositionLeave = ()=>{
        setNewPosition({x:0,y:0});
    }


  return (
    <div id='home' className='bignav afacad-flux'>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand abril-fatface-regular fs-1" href="#"><motion.img animate={{
      scale: [1, 1.5, 1.5, 1, 1],
      rotate: [0, 0, 270, 270, 0],
     
    }}  transition={{
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity, // This makes the animation repeat infinitely
        repeatType: "reverse" // You can also use "reverse" to alternate the direction
      }} className='img-logo me-3' src={star} alt="img_logo_star" />Yassine Zerouali</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link  afacad-flux fs-5" aria-current="page" href="#home">Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link  afacad-flux fs-5" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  afacad-flux fs-5" href='#work'>Work</a>
                        </li>
                    </ul>
                    <div>
                        <a href="/resume1.pdf" download="yassineZerouali_resume.pdf">
                            <motion.button  whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }} className='btn btn-resume afacad-flux fs-5'>Resume</motion.button>

                        </a>
                    </div>
                </div>
            </div>
        </nav>

        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menu</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link nav-link-offcanva  afacad-flux fs-5" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link nav-link-offcanva afacad-flux fs-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav-link-offcanva  afacad-flux fs-5" href='#'>Work</a>
                        </li>
                    </ul>
                    <div>
                        <button className='btn btn-resume afacad-flux fs-5'>Resume</button>
                    </div>
            </div>
        </div>


        <header className='container' style={{height:"350px",position:"relative"}}>
            <div className='row flex-column flex-md-row justify-content-center align-items-center position-relative top-0 position-md-absolute bottom-md-50 z-3'>
                <div className='col-12 col-md-4 d-none d-lg-block' style={{width:'400px'}}>
                    <img
                    style={{
                        transform: `translate(${newPosition.x / 30}px, ${newPosition.y /  30}px) rotateX(${newPosition.y / 100}deg) rotateY(${newPosition.x / 100}deg)`,
                        cursor:'pointer'}}  onMouseMove={onMousePostion} onMouseLeave={onMousePositionLeave}
                     src={myImage} className='img-fluid' alt="my_image" />
                </div>
                <div className='col-12 col-md-6 text-md-center text-lg-start mt-5 mt-md-0'>
                    <h1 className='abril-fatface-regular title-name '  >Hey, <span className='myName'>Yassine</span> here.<span className='blinking-cursor'>|</span> </h1>
                    <p className='fs-3 afacad-flux small_about fs-4'>I create stuff sometimes.</p>
                    <p className='fs-5'>Front-End Developer specializing in React, with expertise in HTML, CSS, and JavaScript. Focused on building responsive and user-friendly web applications.</p>
                </div>
            </div>
            
        </header>
        <div className='scrolldown-parent'>
            <div className='scroll-down rounded-circle' >
                <p className='m-auto text-center fw-bold'>Scroll Down</p>
            </div>
        </div>
    </div>
  )
}

export default Home;