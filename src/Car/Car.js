import React from "react"
import classes from "./Car.css"
import withClass from "../hoc/withClass"
import PropTypes from "prop-types"

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

class Car extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    };

    componentDidMount() {
        if (this.props.index === 0) {
            this.inputRef.current.focus();
        }
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.name.trim() !== this.props.name.trim();
    };

    render() {

        const inputClasses = [classes.input];

        if (this.props.name !== ""){
            inputClasses.push(classes.green);
        } else {
            inputClasses.push(classes.red);
        }

        if (this.props.name.length>4){
            inputClasses.push(classes.bold)
        }

        return (
            <React.Fragment>
                <h3>Car name: {this.props.name}</h3>
                <p>YEAR: <strong>{this.props.year}</strong></p>
                <input
                    ref={this.inputRef}
                    type="text"
                    onChange={this.props.onChangeName}
                    value={this.props.name}
                    className={inputClasses.join(" ")}
                />
                <button onClick={this.props.onDelete}>Delete</button>
            </React.Fragment>);
    }
}

Car.propTypes = {
    name: PropTypes.string.isRequired,
    year: PropTypes.number,
    index: PropTypes.number,
    onChangeName: PropTypes.func,
    onDelete: PropTypes.func
};

export default withClass(Car, classes.Car)
