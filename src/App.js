import React from 'react';
// import FirstTestContainer from './FirstContain';
import Header from './Header';
import Content from './BodyContent';
import './index.css';



class App extends React.Component{
  
  render(){
    return(
      <div className='appContainer'>
        <Header/>
        <Content/>
      
      </div>
    );
  }
}
export default App;