import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <Hero></Hero>
          <Services></Services>
          <Pricing></Pricing>
        </article>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
