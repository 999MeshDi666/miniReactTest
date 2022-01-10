import React from "react";
import facebook from './img/facebook.png';
import instagram from './img/instagram.png';
import twitter from './img/twitter.png';
import telegram from './img/telegram.png';

function AboutUsText(prop){
	return(
		<div className="aboutUs_text">
			{prop.children}
		</div>
	);
}

function AboutContainer(){
	return(
		<div className="aboutUs_container">
			<div className="aboutUs_circle">
				<div className="circle"><p>React</p></div>
			</div>
			<AboutUsText>
				<h2>Lorem Ipsum</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl.</p> 
			</AboutUsText>
		</div>
	);
};

function AboutUS(){
	return(
		<div className="thirdSection_aboutUs">
			<AboutContainer/>
			<AboutContainer/>
			<AboutContainer/>
		</div>
	
	);
}

const socialNetworks = [
	{id: 1, img: facebook, name: 'facebook'},
	{id: 2, img: instagram, name: 'instagram'},
	{id: 3, img: twitter, name: 'twitter'},
	{id: 4, img: telegram, name: 'telegram'},
]

function SocialNList(prop){
	return(
		<li>
			<a href="#">
				<img src={prop.img}/> 
				{prop.name}
			</a>
		</li>
	);
}

function SocialNetworks(prop){
	const socialNList = prop.socialList;
	return(
		<div className="thirdSection_socialNet">
			<ul className="socialN_list">
				{socialNList.map((list)=><SocialNList  key = {list.id} img = {list.img} name = {list.name}/>)}
			</ul>
		</div>
	);
}


function ThirdSectionContainer(prop){
	return(
		<section className="third_section">
			{prop.about}
			{prop.socialNet}
		</section>
	);
};

class ThirdSection extends React.Component{
	render(){
		return(
			<ThirdSectionContainer 
				about = {<AboutUS/>}
				socialNet = {<SocialNetworks socialList = {socialNetworks}/>}
			/>
		);
	}
};
export default ThirdSection;