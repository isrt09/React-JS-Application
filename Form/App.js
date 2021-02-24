import React from 'react';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">          
          <Hello/>                                         
      </header>
    </div>
  );
}

class App extends React.Component{
  state = {
      username : '',
      email : '',
      phone : '',
      district : '',
  }
  ChangeValue = (e) => {
      let val    = e.target.name
      let ourVal = e.target.value
      this.setState({[val]:ourVal})
  }
  
  formSubmit = (e)=> {
     e.preventDefault();
     console.log(this.email, this.phone);
  }
   render(){
      return(
        <div>
            <h1>First Method : Registration Form </h1>
            <p>User Name    : {this.state.username}</p>
            <p>Email Address: {this.state.email}</p>
            <p>Phone No     : {this.state.phone}</p>
            <p>District     : {this.state.district}</p>            
            <form onSubmit={this.formSubmit}>                  
                  <input type="text"   name="username" onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
                  <input type="email"  name="email"    onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
                  <input type="text"   name="phone"    onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
                  <input type="text"   name="district" onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
            {/* Another way to set into State */}
            <h1>Second Method : Registration Form [Recommended]</h1>
            <p>User Name    : {this.state.username}</p>
            <p>Email Address: {this.state.email}</p>
            <p>Phone No     : {this.state.phone}</p>
            <p>District     : {this.state.district}</p>  
                  <input type="text"   name="username" onChange={ (e) => {this.setState({username: e.target.value})}} /><br/>
                  <input type="email"  name="email"    onChange={ (e) => {this.setState({email   : e.target.value})}} /><br/>
                  <input type="text"   name="phone"    onChange={ (e) => {this.setState({phone   : e.target.value})}} /><br/>
                  <input type="text"   name="district" onChange={ (e) => {this.setState({district: e.target.value})}} /><br/>
            </form>
        </div>
      )
   }
}

export default App;



