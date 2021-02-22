import React, { Component } from 'react';

class Statement extends Component{
    state = {
        foods:[
            {name:'apple',     country:'India'},
            {name:'pineapple', country:'Pakistan'},
            {name:'banana',    country:'Nepal'},
            {name:'orange',    country:'Bhutan'},
        ]
    }
    render(){        
        
        return <div>
            <h1>I love {this.state.foods[0].name} very much</h1> 
            <h1>I love {this.state.foods[1].name} very much</h1> 
            <h1>I love {this.state.foods[2].name} very much</h1> 
            <h1>I love {this.state.foods[3].name} very much</h1>
            <hr></hr> 
            <h1>I love my country {this.state.foods[0].country} very much</h1> 
            <h1>I love my country {this.state.foods[1].country} very much</h1> 
            <h1>I love my country {this.state.foods[2].country} very much</h1> 
            <h1>I love my country {this.state.foods[3].country} very much</h1> 
        </div>       
    }
}

export default Statement
