import React, {Component} from 'react';
const Button = (props) => {
        return(<div>
            <button onClick={()=>{props.sub("sub")}}>substract</button>
            <button onClick={()=>{props.sub("add")}}>add</button>
                <br/>
                <button onClick={()=>{props.sub("increase")}}>++</button>
                <button onClick={()=>{props.sub("decrease")}}>--</button>
            </div>
        );
    }

export default Button;