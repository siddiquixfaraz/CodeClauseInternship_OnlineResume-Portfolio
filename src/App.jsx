
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import './styles/app.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Home from './components/Home.jsx'
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import './styles/Header.css';
import './styles/media-queries.css'



function App() {
  return (

    <div className="app">
     
     <Header />  
     <Home />  
     <About />     
     <Skills />     
     <Portfolio />    
     <Contact />    
     <Footer />    
      
    </div>
  
  );
}

export default App;
