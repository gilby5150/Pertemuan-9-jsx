import gilby from './image/gilby.jpg'

const About = () => {
    const date = new Date()
    const time = date.toLocaleTimeString()
  
    return (
      <>
      <div className='App-body'>
          <img src={gilby} className='App-logo'/>
            <h1>Bootcamp batch 3</h1>
            <p>Gilby Faqih</p>
            <h1>{time}</h1>
      </div>
        
      </>
    )
  }
  
  export default About