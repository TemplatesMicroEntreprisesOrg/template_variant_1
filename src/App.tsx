import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <article>
          <Hero></Hero>
          <Services></Services>
        </article>
      </main>
    </>
  );
}

export default App;
