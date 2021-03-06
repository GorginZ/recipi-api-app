import React from "react";



class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    this.setState({value: event.target.value});  }
    handleSubmit(event) {
        console.log("from handleSubmit" + " " + this.state.value)
        // 8. Add an onSubmit event handler for the form, this event handler should be defined in <Form /> and preventDefault()

      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Search:
            <input 
            type="text" 
            value={this.state.value} 
            onChange={this.handleChange} />       
             </label>
          <input 
          type="submit" 
          value="Submit" />
        </form>
      );
    }
  }

  
export default Form;