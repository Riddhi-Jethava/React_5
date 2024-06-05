import './App.css';
import Contacts from './Components/Contacts';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';
import Portfolio from './Components/Portfolio';
import Section01 from './Components/Section01';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
function App() {
  return (
    <div className="App">
      <Header/>  
      <Section01/>
      <Main/>    
      <Portfolio/>
      <Services/>
      <Testimonials/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
