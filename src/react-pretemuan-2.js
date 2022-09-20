import './App.css';
import Nav from './components/layout/Navbar'
import User from './components/user'
import gilby from './components/image/gilby.jpg'

function App() {
  // const date = new Date();
  // const time = date.toLocaleTimeString();
  return (
      <div className="App">
      <header className="App-header">
      <Nav/>
        </header>
        <body className='App-body'>
        {/* <img src={gilby} className="App-logo" alt="logo" />
        <h1>Bootcamp batch 3</h1>
        <p>
          Gilby Faqih
        </p> */}
          <h1>{new Date().toLocaleTimeString()}</h1>
          <input type="number" max={5} style={{border:"3px solid", color:"blue"}}/>
          <User name="Gilby" umur="21"/>
          <User name="hisyam" umur="22"/>
        </body>
        <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
