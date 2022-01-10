import React from "react";

const listTitles = [
  {id: 1, title: 'Products for B2B clients'},
  {id: 2, title: 'Products for B2C clients'},
  {id: 3, title: 'Tenders'},
  {id: 4, title: 'Foreign business'},
  {id: 5, title: '2021 - 2022 Startups' },
  {id: 6, title: 'Modern problems - modern solutions'},
  {id: 7, title: 'Marketing and Targeting'},
	{id: 8, title: 'Business analytics'}
];

function SideBarList(prop){
  return(
    <li><a href="#" target='_blank'>{prop.value}</a></li>
  );
};

function SideBar(prop){
  const lists = prop.lists;
  const showList = lists.map((list)=>
		<SideBarList key = {list.id} value = {list.title}/>);
  return(
    <aside className="side_bar">
      <h1>Content list:</h1>
      <ul className="side_bar_list">
        {showList}
      </ul>
    </aside>
  );
};

class SignUpForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }
  submitHandler(event){
    const num = /[0-9]/;
    if(num.test(this.state.value)){
      alert('Вы не можете иметь числа в имени');
      event.peventDefault();
    }
    else{
      alert('успешно');
      event.peventDefault();
    }
    
  }

  render(){
    
    return(
      <div className="signUp_container">
        <h2>Sign Up:</h2>
        <form method="POST" className="signUp_form" onSubmit={this.submitHandler}>
          <input type='text' name='name' value = {this.state.value} onChange={this.handleChange} placeholder="name" required className="signUp_form_inputs"/>
          <input type='text' name = 'surname' placeholder="surname" required className="signUp_form_inputs"/>
          <input type='email' name = 'email' placeholder="email" required className="signUp_form_inputs"/>
          <input type='password' name = 'passwowd' placeholder="password" required className="signUp_form_inputs"/>
          <input type='submit' value = 'Sent' className="signUp_form_btn" />
        </form>
      </div>
     
    );
  }
}

class SecondSection extends React.Component{
  render(){
    return(
      <section className="second_section">
				<SideBar lists = {listTitles}/>
        <SignUpForm/>
      </section>
    );
  }
}

export default SecondSection