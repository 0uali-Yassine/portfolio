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
                            <a class="nav-link  afacad-flux fs-5" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link  afacad-flux fs-5" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link  afacad-flux fs-5" href='#'>Work</a>
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


        <header className='container border' style={{height:"400px",position:"relative"}}>
            <div className='d-flex' style={{position:"absolute",bottom:"-83px"}}>
                <div className='' style={{width:'380px'}}>
                    <img src={myImage} className='img-fluid' alt="my_image" />
                </div>
                <div>
                    <h1 className='abril-fatface-regular title-name '  >Hey, <span className='myName'>Yassine</span> here.</h1>
                    <p className='fs-3 afacad-flux text-dark'>I create stuff sometimes.</p>
                </div>
            </div>
            
        </header>
        <div style={{width:"100%",height:"170px",backgroundColor:"black"}}>

        </div>
    </div>
  )
}

export default Home;