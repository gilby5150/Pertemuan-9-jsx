import { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { FirstName: "", LastName: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({
      [event.target.name] : event.target.value
    })
  }
  
  handleSubmit(event) {
    const { FirstName, LastName } = this.state;
    event.preventDefault();
    alert(`
      FirstName : ${FirstName}
      LastName : ${LastName}
      
    `);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name :
          <input
          name="FirstName"
            type="text"
            value={this.state.FirstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last Name :
          <input
          name="LastName"
            type="text"
            value={this.state.LastName}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
