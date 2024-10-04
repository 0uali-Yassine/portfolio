import React from 'react';
import star from "../assets/Orange start.png";
import myImage from "../assets/Blur-face-01.png";

function Home() {
  return (
    <div className='bignav'>
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <a class="navbar-brand abril-fatface-regular fs-1" href="#"><img className='img-logo me-3' src={star} alt="" />Yassine Zerouali</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-white afacad-flux fs-5" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link text-white afacad-flux fs-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white afacad-flux fs-5" href='#'>Work</a>
                        </li>
                    </ul>
                    <div>
                        <button className='btn btn-resume afacad-flux fs-5'>Resume</button>
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

        <header>
            <img src={myImage} style={{width:"300px"}} alt="my_image" />
        </header>

    </div>
  )
}

export default Home;