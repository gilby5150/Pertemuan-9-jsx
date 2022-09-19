import './App.css';
import Nav from './components/layout/Navbar'
import gilby from './components/image/gilby.jpg'

function App() {
  return (
      <div className="App">
      <header className="App-header">
      <Nav/>
        </header>
        <body className='App-body'>
        <img src={gilby} className="App-logo" alt="logo" />
        <h1>Bootcamp batch 3</h1>
        <p>
          Gilby Faqih
        </p>
          
        </body>
        <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
