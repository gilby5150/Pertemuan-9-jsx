import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/layout/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Comment from './components/Comment';
import Search from './components/Search';
import YoutubeApp from './components/Youtube';
import HookColor from './components/HookColor';
import Counter from "./features/counter/Counter";
import ReactForm from "./components/React Form/components/App";

function App() {
  return (
    <Router>
      <div className='App-header'>
        <Nav />
      </div>
      <div className='App-body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Youtube" element={<YoutubeApp />} />
          <Route path="/Hook" element={<HookColor />} />
          <Route path="/Redux" element={<Counter />} />
          <Route path="/ReduxForm" element={<ReactForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
