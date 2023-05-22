import logo from './logo.svg';
import Header from './Components/Header';
import Homebanner from './Components/Homebanner';
import Product from './Components/Product';
import About_us from './Components/About_us';
import Contact_us from './Components/Contact_us';
import Footer from './Components/Footer';
import img1 from './Images/respberry1.png'
import img2 from './Images/respberry2.png'
import img3 from './Images/respberry.png'
function App() {
 let images=[img1,img2,img3];
  return (
    <div className="App">
     <Header/>
     <Homebanner/>
     <Product name={"Respberry Pie"} images={images} price={15} />
     <About_us/>
     <Contact_us/>
     <Footer/>
    </div>
  );
}

export default App;
