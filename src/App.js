import { useEffect, useState } from "react";
import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Work from "./component/Work";
import data from "./data";


function App() {
  
  const [bigLoading,setGigLoading] = useState(true);
  const [Data,setData] = useState(data);
  const [category,setCategory] = useState('all');
  const [loading,setLoading] = useState(false);
  const [toTop,setToTop] = useState(false);


  


 
  
  const fecthData = async(category)=>{
    setLoading(true);
    switch (category) {
      case "all":
       setTimeout(()=>{
        setLoading(false);
        setData(data);
       },1000);
       break;
      case "e-commerce":
        setTimeout(()=>{
          setLoading(false);
          setData(data.filter(flt => flt.category === "e-commerce"));
        },1000);
        break;
      case "chat-app":
       setTimeout(()=>{
        setLoading(false);

        setData(data.filter(flt => flt.category === "chat-app"));
       },1500)
       break;
      case "admin-dashboard":
        setTimeout(()=>{
          setLoading(false);

          setData(data.filter(flt => flt.category === "admin-dashboard"));
        },1000);
        break;
      case "e-learning":
        setTimeout(()=>{
          setLoading(false);

           setData(data.filter(flt => flt.category === "e-learning"));
        },1500);
        break;
      case "kanban-task":
        setTimeout(()=>{
          setLoading(false);

           setData(data.filter(flt => flt.category === "kanban-task"));
        },1000);
        break;
      case "landing-page":
        setTimeout(()=>{
          setLoading(false);
          setData(data.filter(flt => flt.landing_page));
        },1500);
        break;
      
    }
    
  }

  useEffect(()=>{
  
    fecthData(category);

  },[category])

  useEffect(()=>{
    setTimeout(()=>{
      setGigLoading(false);
    },4000)
  },[])


  useEffect(()=>{

    const sizeHight = ()=>{
      if(window.scrollY > 400){

        setToTop(true);
      }else{
        setToTop(false);

      }
    } 
    
    window.addEventListener('scroll',sizeHight)

    return ()=> window.removeEventListener('scroll',sizeHight);
  },[])

  const scrollToTop = ()=>{
    window.scrollTo({top:0,behavior:'smooth'});
  }

  return (
    <div>

      {
        bigLoading ? <div style={{width:'100%',height:'100vh',backgroundColor:'#294129',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div class="loader2 abril-fatface-regular"></div>
        </div> : <div className="position-relative">
                  <Home/>
                  <About/>
                  <Work setCategory={setCategory} Data={Data} loading={loading}/>
                 {
                  toTop &&  <div onClick={scrollToTop} className="d-flex justify-content-center align-items-center fw-bold fs-4  rounded-pill" style={{position:"fixed",cursor:'pointer',right:'28px',bottom:'101px',zIndex:"10",width:'50px',height:'50px',backgroundColor:'black',color:'white'}}>↑</div>
                 }
                  <Footer/>
                </div>
      }
      
    </div>
  );
}

export default App;
