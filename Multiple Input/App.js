import React from 'react';
import './App.css';

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
      this.setState({val:ourVal})
  }
   render(){
      return(
        <div>
            <h1>Registration Form</h1>
            <p>User Name    : {this.state.username}</p>
            <p>Email Address: {this.state.email}</p>
            <p>Phone No     : {this.state.phone}</p>
            <p>District     : {this.state.district}</p>            
            <form>                  
                  <input type="text"   name="username" onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
                  <input type="email"  name="email"    onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
                  <input type="text"   name="phone"    onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
                  <input type="text"   name="district" onChange={this.ChangeValue} placeholder={this.state.name} /><br/>
            </form>
        </div>
      )
   }
}

export default App;



