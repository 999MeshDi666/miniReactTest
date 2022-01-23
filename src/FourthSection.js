import React from "react";
import {BtnStyleContxt} from "./Context";



const txt = {
	title: "Lorem Ipsum",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Nisl purus in mollis nunc sed id semper. Id consectetur purus ut faucibus pulvinar elementum integer enim neque. Lacus suspendisse faucibus interdum posuere lorem ipsum. Amet risus nullam eget felis eget nunc. Enim ut sem viverra aliquet eget. Lacus viverra vitae congue eu. Ultricies lacus sed turpis tincidunt id aliquet. Sed sed risus pretium quam vulputate dignissim suspendisse. Velit euismod in pellentesque massa placerat duis ultricies lacus. Tincidunt nunc pulvinar sapien et. Faucibus interdum posuere lorem ipsum. Eu augue ut lectus arcu bibendum at. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Convallis aenean et tortor at risus viverra. Donec adipiscing tristique risus nec. Amet consectetur adipiscing elit ut aliquam purus. Consequat ac felis donec et odio pellentesque diam. Justo eget magna fermentum iaculis eu non. Interdum velit laoreet id donec. Pretium nibh ipsum consequat nisl vel pretium lectus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Et magnis dis parturient montes. Eu lobortis elementum nibh tellus molestie nunc non blandit massa. Potenti nullam ac tortor vitae. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Tortor at auctor urna nunc id."
}


function TextContent(prop){
  return(
		<div className= {prop.class} style = {prop.style}>
			<h1>{prop.title}</h1>
			<p>{prop.text}</p>
		</div>
  );
};


function Buttons(prop){

	return(
		<div className="btn_container">
			<button style = {prop.style} onClick = {prop.changeColor}>Click</button>
		</div>
	);
}

class FourthSection extends React.Component{

	render(){
		return(
			<BtnStyleContxt.Consumer>
			 	{({color, changeColor}) => (
					<section className="fourth_section"> 
						<TextContent class = "section_text_content" title = {txt.title} text = {txt.text} style = {color}/>
						<Buttons style = {color} changeColor = {changeColor}/>
					</section>
				)}
		
			</BtnStyleContxt.Consumer>
		);
	} 
}


export default FourthSection