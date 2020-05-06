// import React,{ Component, Fragment } from 'react';
// class LifescyclePhases extends Component{
    
    
//     constructor(props){
//         super(props);
//         this.state={
//             count:0,
//             items: [],
//             text: ''
//         }
//         console.log("Constructor");
 
//     }
 
//     getTodoItem = (event) =>{
//         this.setState({ text: event.target.value });
//     }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         if (!this.state.text.length) {
//           return;
//         }
//         const newItem = {
//           text: this.state.text,
//           id: Date.now()
//         };
//         this.setState(state => ({
//           items: state.items.concat(newItem),
//           text: ''
//         }));

//         console.log(this.state.items)
//       }

//     incrementCount=()=>{
         
//         this.setState({
//             count: this.state.count +1,
//         });
//     }
//     UNSAFE_componentWillMount(){
//         console.log("Component Will Mount");
//     }
//     shouldComponentUpdate(){
//         if(this.state.count >10){
//             return false;
//         }
//         return true;
//     }
 
//     UNSAFE_componentWillUpdate(){
//         console.log("component will update");
//     }
 
 
//     componentDidMount(){
//         console.log("Component Did Mount");
       
//     }
 
//     componentDidUpdate(){
//         console.log("component did update");
//     }
//  componentWillUnmount(){
//      console.log("Component will unmount");
//  }

//     render(){
//         console.log("Rendering");
//         return(
//             <Fragment>
                
//                     {/* <ul>
//                         {this.state.items.map((item)=>{
//                             <li key={item.id}>{item.text}</li>
//                         })}
//                     </ul>
//                  */}

                 
//                 <h1>TODO</h1>
//                 <form onSubmit={this.handleSubmit}>
//                     <input type="text" id="new-todo" value={this.state.text} onChange={this.getTodoItem}/>
//                     <button>Add #{this.state.items.length + 1}</button>
//                 </form>
                
//                 
//             </Fragment>
//         )
//     }
// }
// export default LifescyclePhases;
import React, { Component } from 'react'
class LifecyclePhases extends Component {

    constructor(props){
        console.log('1.CONSTRUCTOR ')
        super(props);
        this.state = {
            title:'Lifecycle'
        }
    }
    UNSAFE_componentWillMount() {
        console.log('2.BEFORE RENDER :componentWillMount()')
    }
    componentDidMount() {
        console.log('4.AFTER RENDER :componentDidMount()')
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('5. BEFORE UPDATE :componentWillUpdate()')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('7.AFTER UPDATE :componentDidUpdate()')
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.title ===this.state.title) {
    //         return false
    //     }
    //     return  true
    // }

    /**
     * Deprecated methods
     * 1. componentWillMount()
     * 2. componentWillUpdate
     * 3. componentWillReceiveProps()
     */
    
    render() {
        console.log('3 / 6 .RENDER :render()')
        return (
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={()=>{
                    this.setState({title:'something else'})
                }}>CLICK TO CHANGE</div>
            </div>
        )
    }
}

export default LifecyclePhases
