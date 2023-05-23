import logo from './logo.svg';
import style from './App.css'
import Header from './Components/Header';
import Homebanner from './Components/Homebanner';
import Product from './Components/Product';
import About_us from './Components/About_us';
import Contact_us from './Components/Contact_us';
import Footer from './Components/Footer';
import img1 from './Images/respberry1.png'
import img2 from './Images/respberry2.png'
import img3 from './Images/respberry.png'
import apple1 from './Images/pine apple1.png'
import apple2 from './Images/pine apple3.png'
import apple3 from './Images/pine apple4.png'
function App() {
 const images=[img1,img2,img3];
 const appleimg=[apple3,apple1,apple2];
  return (
    <div className="App">
     <Header/>
     <Homebanner/>
     <h1 id="products">Products</h1>
     <Product name={"Respberry Pie"} images={images} price={15} rating={'4.3/5'} chef={"Ranveer Brar"} color={"Red"} mfg_date={"20 May 2023"}expiry_date={"March 2026"} size={"Large"}/>
     <Product name={"Pineapple Pie"} images={appleimg} price={9.99} rating={'3.8/5'} chef={"Jhon Wick"} color={"Yellow"} mfg_date={"20 March 2023"}expiry_date={"Jan 2026"} size={"Medium"}/>
     <About_us/>
     <Contact_us/>
     <Footer/>
    </div>
  );
}

export default App;
