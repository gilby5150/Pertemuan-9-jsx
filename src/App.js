import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Nav from './components/layout/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className='App-header'>
      <Nav/>
      </div>
      <div className='App-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        </div> 
    </Router>
  );
}

export default App;
