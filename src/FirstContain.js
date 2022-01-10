import React from 'react';
import './index.css';


const btn_name = {
    press :"Show",
    npress: "Hide"
}
  
  
function MesWindows(prop){
  
    if(!prop.show){
        return null
    }
    else{
        return(
            <div className='mesWindows mesWindowsAnimations'>
                <h1 className='mesWindowsTitle'>Windows</h1>
            </div>
        )
    }
}
  
  
class Button extends React.Component{
    render(){
        return(
            <button className='buttons' onClick={this.props.onClick}>{this.props.title? btn_name.npress : btn_name.press}</button>
        );
    }
  
}
  
class Container extends React.Component{
  
    render(){
        return(
            <div className='container'>
                {this.props.content}
            </div>
        )
  
    }
   
}
  
class FirstTestContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {isPressed:false};
        this.ShowMesWindows = this.ShowMesWindows.bind(this);
  
    }
    ShowMesWindows(){
        this.setState(prevSatate=>({
            isPressed: !prevSatate.isPressed 
        }))
    }
  
    render(){
        let button = <Button onClick = {this.ShowMesWindows} title = {this.state.isPressed}/>
        return(
            <div className='firstTestContainer'>
                <Container content = {button}/>
                <MesWindows show = {this.state.isPressed}/>
            </div>
        );
    }
}
export default  FirstTestContainer;