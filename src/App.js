import React from 'react';
import {style, BtnStyleContxt } from "./Context";
// import FirstTestContainer from './FirstContain';
import Header from './Header';
import Content from './BodyContent';
import './index.css';



class App extends React.Component{
  
  constructor(props){
    super(props);

    this.changeColor = () =>{
   
      this.setState({option: this.state.option + 1});
      if(this.state.option === 1){
        this.setState({color: this.state.color = style.black});
        console.log(this.state.option);
      }
      else if(this.state.option === 2){
        this.setState({color: this.state.color = style.pink});
        console.log(this.state.option);
      }
      else{
        this.setState({color: this.state.color = style.gray});
        console.log(this.state.option);
        this.setState({option: this.state.option = 1});
      }
    }

    this.state = {
      color: style.black,
      changeColor: this.changeColor,
    }

  }
  


  render(){
    return(
     <BtnStyleContxt.Provider value = {this.state}>
        <div className='appContainer'>
          <Header/>
          <Content/>
        </div>
     </BtnStyleContxt.Provider>      
    );
  }
}
export default App;