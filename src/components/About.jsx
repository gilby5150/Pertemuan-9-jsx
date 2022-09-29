import gilby from './image/gilby.jpg'
import Clock from './Clock'

const About = () => {
  
    return (
      <>
      <div className='App-body'>
          <img src={gilby} alt="logo" className='App-logo'/>
            <h1>Bootcamp batch 3</h1>
            <p>Gilby Faqih</p>
            <h1><Clock/></h1>
      </div>
        
      </>
    )
  }
  
  export default About