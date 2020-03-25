import React,{ Component, Fragment } from 'react';
class LifescyclePhases extends Component{
    
    
    constructor(props){
        super(props);
        this.state={
            count:0,
            items: [],
            text: ''
        }
        console.log("Constructor");
 
    }
 
    getTodoItem = (event) =>{
        this.setState({ text: event.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (!this.state.text.length) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));

        console.log(this.state.items)
      }

    incrementCount=()=>{
         
        this.setState({
            count: this.state.count +1,
        });
    }
    UNSAFE_componentWillMount(){
        console.log("Component Will Mount");
    }
    shouldComponentUpdate(){
        if(this.state.count >10){
            return false;
        }
        return true;
    }
 
    UNSAFE_componentWillUpdate(){
        console.log("component will update");
    }
 
 
    componentDidMount(){
        console.log("Component Did Mount");
       
    }
 
    componentDidUpdate(){
        console.log("component did update");
    }
 componentWillUnmount(){
     console.log("Component will unmount");
 }

    render(){
        console.log("Rendering");
        return(
            <Fragment>
                
                    {/* <ul>
                        {this.state.items.map((item)=>{
                            <li key={item.id}>{item.text}</li>
                        })}
                    </ul>
                 */}

                 
                <h1>TODO</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="new-todo" value={this.state.text} onChange={this.getTodoItem}/>
                    <button>Add #{this.state.items.length + 1}</button>
                </form>
                
                <h1>count: {this.state.count}</h1>
                <button onClick={this.incrementCount}>Increment</button>
            </Fragment>
        )
    }
}
export default LifescyclePhases;