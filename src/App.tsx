import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Gallery from './components/Gallery/Gallery';
import Appointment from './components/Appointment/Appointment';
import BackToTop from './components/BackToTop/BackToTop';
import Footer from './components/Footer/Footer';
import './App.css';
import './flaticon.css';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <Hero></Hero>
          <Services></Services>
          <Pricing></Pricing>
          <Gallery></Gallery>
          <Appointment></Appointment>
        </article>
      </main>
      <Footer></Footer>
      <BackToTop></BackToTop>
    </>
  );
}

export default App;
