import { buildQueries } from '@testing-library/react';
import React, { Component } from 'react';
import './Custom.css';

class DataBinding extends Component{
    // Technique 001
    constructor(props){
        super(props);
        this.state={
            cars:[
                {name:'BMW',  brand:'BMW001'},
                {name:'Audi', brand:'Audi002'},
                {name:'Vox',  brand:'Vox001'},
                {name:'Fer',  brand:'Fer001'}
            ]
        }
    }

 // Technique 002
 state = {
     name:'Welcome to React JS'
 }

 changeValue = (event) =>{
     this.setState({
         name:event.target.value
     });
 }  
  
    render(){  
        const test ={
            color:'yellow',            
        };              
        return(
            <div>
                <input type="text" onChange={this.changeValue}/>
                <h1 className='heading'>React JS : Data Binding</h1>
                <h3>{this.state.cars[0].name}</h3>
                <h3 style={test}>We are loving our country Bangldesh</h3>
                <h3>{this.state.name}</h3>
            </div>
        )
    }
}

export default DataBinding

