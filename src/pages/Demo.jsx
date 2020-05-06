import React, { Component } from 'react'
//step form demo
class Demo extends Component {
    constructor(props) {
      super(props);
      this.state = {
          value: '',
          formstep:0
        };
  
    }
  
    handleChange = (event)=> {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event)=> {
      alert('A name was submitted: ' + this.state.value);
      this.setState({formstep:1})
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
           {this.state.formstep===0 ?<form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Next" />
            </form>:this.state.formstep===1?<div><h1>step 2</h1></div>:null}
        </div>
      );
    }
  }
  export default Demo