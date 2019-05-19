import React from "react"
import "./Car.css"

/*function car() {
    return(
        <div>This is car component</div>
    );
}*/

/*const car = () => {return(<div>This is car component</div>);};*/

/*const car = () => (
    <div>This is car component
<strong>test strong</strong>
    </div>);*/

export default (props) => {
    const inputClasses = ["input"];

    if (props.name !== ""){
        inputClasses.push("green");
    } else {
        inputClasses.push("red");
    }

    if (props.name.length>4){
        inputClasses.push("bold")
    }

    return (
        <div className="Car">
            <h3>Car name: {props.name}</h3>
            <p>YEAR: <strong>{props.year}</strong></p>
            <input
                type="text"
                onChange={props.onChangeName}
                value={props.name}
                className={inputClasses.join(" ")}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>);
}
