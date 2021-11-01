import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Background from './components/Background/Background';
import Resume from './components/Resume/Resume';

function App() {


  return (
    <div className="App">
      <Header/>
      <Home/>
      <Projects/>
      <Resume/>
      <Skills/>
      <Background/>
      <Footer/>
    </div>
  );
}

export default App;
