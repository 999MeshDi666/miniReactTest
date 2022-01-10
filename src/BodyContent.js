import React from "react";
import FirstSection from './FirstSection';
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";


class Content extends React.Component{

  render(){
    return(
      <article className="article">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>

      </article>

    );
      
  }
}

export default Content;