import User from './User'

const Home = () => {
  const date = new Date()
  const time = date.toLocaleTimeString()

  return (
    <>
      <div className='App-body'>
        {time}
      <h2>Bootcamp Batch 3</h2>
      <span>Gilby</span>

      <div style={{ borderBottom: '1px solid white', width: '50%', margin: '40px 0' }} />
      <User name="Adit" age="30" />
      <User name="Gilby" age="20" />
      </div>
    </>
  )
}

export default Home