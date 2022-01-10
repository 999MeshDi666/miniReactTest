import React from "react";
// import './index.css';

const navTitles = [
	{ id: 1, name: 'About us'},
	{ id: 2, name: 'Our clients'},
	{ id: 3, name: 'B2B and B2C'},
	{ id: 4, name: 'Products'},
	{ id: 5, name: 'Contact us'},
]

function NavLists(prop){
	return(
		<li><a href="#" target="_blank">{prop.value}</a></li>
	);
}

function Navigation(prop){
	const navs = prop.navs;
	const navList = navs.map((nav)=>
		<NavLists key = {nav.id} value = {nav.name}/>)
	return(
		<nav className="header_navigation">	
			<ul className="header_navigation_list">
				{navList}
			</ul>      
    </nav>
	);
};

function Header(){
  return(
    <header className="header">
      <p className="header_logo">React</p>
			<Navigation navs = {navTitles}/>
    </header>

  );

}

export default Header;