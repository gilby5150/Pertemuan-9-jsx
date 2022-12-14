import User from './User'
import Like from './Like'
import Clock from './Clock';
import Form from './Form';
import Search from './Search';

const Home = () => {
  const date = new Date()
  const time = date.toLocaleTimeString()

  return (
    <>
      <div className='App-body'>
        <p>refresh page : {time}</p>        
        <p>real time : <Clock/></p>
      <h2>Bootcamp Batch 3</h2>
      <span>Gilby</span>

      <div style={{ borderBottom: '1px solid white', width: '50%', margin: '40px 0' }} />
      <User name="Adit" age="30" />
      <User name="Gilby" age="20" />
      <Like/>
      <Form/>
      <Search/>
      </div>
    </>
  )
}

export default Home