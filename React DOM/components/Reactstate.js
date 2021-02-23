import React, { useState } from 'react';

const Reactstate = props => {
    const [foodState, setFoodState] = useState({
        food:[
            {name:'apple',   country:'India'},
            {name:'orange',  country:'UK'},
            {name:'mango',   country:'USA'}
        ]
    });

    const clickHandleer = () => {
        setFoodState({
            food:[
                {name:'juice',   country:'India'},
                {name:'coffee',  country:'UK'},
                {name:'cocktail',country:'USA'}
            ]    
        })
    }

    return(
        <div>
            <button onClick={clickHandleer}>Change Name</button>
            <h1>Food Name is {foodState.food[0].name}</h1>
            <h1>Food Name is {foodState.food[1].name}</h1>
            <h1>Food Name is {foodState.food[2].name}</h1>
        </div>
    )
}
export default Reactstate
