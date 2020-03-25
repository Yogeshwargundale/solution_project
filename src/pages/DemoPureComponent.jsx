import React, { PureComponent, Fragment } from 'react'

class DemoPureComponent extends PureComponent {
    
    state = {
        text:''
    }
    
    render() {
        const styles = {
            button:{
                width:'50px',
                height : '30px',
            },
            text:{
                fontWeight:this.state.text,
                fontStyle:this.state.text,
                textDecoration:this.state.text
            }
        }
        console.log(this.state.text)
        return (
            <Fragment>
               <br/><br/>
                <div style={{textAlign:"center"}}>
                    <button style={styles.button} onClick={()=>{this.setState({text:'bold'})}}>B</button>
                    <button style={styles.button} onClick={()=>{this.setState({text:'italic'})}}>I</button>
                    <button style={styles.button} onClick={()=>{this.setState({text:'underline'})}}>U</button><br/>
                    <span style={styles.text}>PureComponent</span>
                </div>
            </Fragment>
        )
    }
}

export default DemoPureComponent