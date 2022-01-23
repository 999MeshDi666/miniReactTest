import React from "react";
import FirstSection from './FirstSection';
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";


class Content extends React.Component{

  render(){
    return(
      <article className="article">
        <FirstSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
      </article>

    );
      
  }
}

export default Content;