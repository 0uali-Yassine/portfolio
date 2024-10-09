import { useState } from "react";
import About from "./component/About";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Work from "./component/Work";


function App() {
  
  const [data,setData] = useState([]);
  
  const fecthData = async()=>{
    const response = await fetch('./data.json');
    const data = await response.json();
    console.log(data);
  }
  fecthData();
  return (
    <div>

      <Home/>
      <About/>
      < Work/>
      <Footer/>
      
    </div>
  );
}

export default App;
