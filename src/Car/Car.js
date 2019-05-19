import React from "react"
import classes from "./Car.css"
import Radium from "radium"

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

const Car = (props) => {
    const inputClasses = [classes.input];

    if (props.name !== ""){
        inputClasses.push(classes.green);
    } else {
        inputClasses.push(classes.red);
    }

    if (props.name.length>4){
        inputClasses.push(classes.bold)
    }

    const  style = {
        border: "1px solid #ccc",
        boxShadow: "0 4px 5px 0 rgba(0, 0, 0, .14)",
        ":hover":{
            border: "1px solid #aaa",
            boxShadow: "0 4px 15px rgba(0, 0, 0, .25)",
            cursor: "pointer"
        }
    };

    return (
        <div className={classes.Car} style={style}>
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
};

export default Radium(Car)
