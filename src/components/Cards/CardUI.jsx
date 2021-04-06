import React from 'react';

import './card-style.css'

const card = props =>{
    return (
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} className="card-img-top"/>
            </div>
            <div>
                <h4 className="card_title">{props.title}</h4>
                <p className="card-text text-secondary">
                
                 magna aliqua. Ut enim ad minim veniam, quis nostrud it 
                 in voluptate velit esse cillum do</p> 
                 <a href="" className="anchor">
                     click me!</a>  
            </div>
            
        </div>
    )
}

export default card
