import React from "react";

const lorem = {
  title: "Lorem Ipsum",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Nisl purus in mollis nunc sed id semper. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Lacus suspendisse faucibus interdum posuere lorem ipsum. Amet risus nullam eget felis eget nunc. Enim ut sem viverra aliquet eget. Lacus viverra vitae congue eu. Ultricies lacus sed turpis tincidunt id aliquet. Sed sed risus pretium quam vulputate dignissim suspendisse. Velit euismod in pellentesque massa placerat duis ultricies lacus. Tincidunt nunc pulvinar sapien et. Faucibus interdum posuere lorem ipsum. Eu augue ut lectus arcu bibendum at. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Convallis aenean et tortor at risus viverra. Donec adipiscing tristique risus nec. Amet consectetur adipiscing elit ut aliquam purus. Consequat ac felis donec et odio pellentesque diam. Justo eget magna fermentum iaculis eu non. Interdum velit laoreet id donec. Pretium nibh ipsum consequat nisl vel pretium lectus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Et magnis dis parturient montes. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Potenti nullam ac tortor vitae. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Tortor at auctor urna nunc id."
};
const loremForm = {
  title: "Lorem ipsum Form",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
};

const showFormWin = {
  show: "Show form",
  hide: "Hide form"
};

function TextContent(prop){
  return(
    <div className="section_text_content">
      <h1>{prop.title}</h1>
      <p>{prop.text}</p>
    </div>
  );
};

function FormContent(prop){
  return(
    <div className = "first_section_form">
      <TextContent title = {loremForm.title} text = {loremForm.text}/>
      <button className = "section_form_btn" onClick = {prop.onClickHandler}>{prop.callForm ? showFormWin.hide : showFormWin.show}</button>

    </div>
  )
};
function FromWindows(prop){
  if(!prop.show){
    return(
      null
    )
  }
  else{
    return(
      <div className="form_window">
        <h3>Lorem ipsum sit amet dolor</h3>
        <form method="POST" action="madi.egeubekov@mail.ru" className="form">
          <input type='text' name='name' placeholder="name" className="form_inputs" required/>
          <input type='email' name='email' placeholder="example@mail.com" className="form_inputs" required/>
          <input type='submit' value='Done' className="form_btn"/>
        </form>
      </div>
    )

  }
 

};
class FirstSection extends React.Component{

  constructor(props){
    super(props);
    this.state = {isCalled: false};
    this.formWindowsHandler = this.formWindowsHandler.bind(this);

  }

  formWindowsHandler(){
    this.setState(prevState =>({
      isCalled: !prevState.isCalled
    }))
  }

  render(){
    return(
      <section className="first_section">
				<div className="first_section_text"> 
					<TextContent title = {lorem.title} text = {lorem.text}/>
				</div>
				<FormContent onClickHandler = {this.formWindowsHandler} callForm = {this.state.isCalled}/>
				<FromWindows show = {this.state.isCalled}/>
      </section>
    );

  };
   
  
};

export default FirstSection;
