import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Obout from "./components/Obout/Obout";
import Product from "./components/Product/Product";
import "./style.scss";
import "./Media.css";
import { ModalProvider } from "./contexts";


function App() {
  return (
    <ModalProvider>
<BrowserRouter>
    <div className="page-container">
    <div className="content-wrap">
      
     <Header/>
     <Routes>
<Route path="/" element={<Home/>}/>
<Route path="/product/:idx" element={<Product/>}/>
<Route path="/Obout" element={<Obout/>}/>
     </Routes>
     </div>
     <Footer/>
     </div>  
     
    </BrowserRouter>
    </ModalProvider>
    
  );
}

export default App;
