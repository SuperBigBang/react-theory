import React, {Component} from 'react';
import './App.scss';
import Car from "./Car/Car"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
import Counter from "./Counter/Counter"

export const ClickedContext = React.createContext(false);

class PreviouslyApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            cars: [
                {name: "Ford", year: 2018},
                {name: "Audi", year: 2016},
                {name: "Mazda 1", year: 2010}
            ],
            pageTitle: "React components",
            showCars: false
        };
    };

    toggleCarsHandler = () => {
        this.setState({
            showCars: !this.state.showCars
        });
    };

    componentWillMount() {
        console.log("App componentWillMount")
    }

    componentDidMount() {
        console.log("App componentDidMount")
    }

    onChangeName(name, index) {
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({cars})
    }

    deleteHandler(index) {
        const cars = this.state.cars.concat();

        cars.splice(index, 1);

        this.setState({cars});
    }

    // handleInput = (event) => {
    //     this.setState({
    //         pageTitle: event.target.value
    //     });
    // };

    render() {
        console.log("render");
        const divStyle = {
            textAlign: "center"
        };

        let cars = null;

        if (this.state.showCars) {
            cars = this.state.cars.map((car, index) => {
                return (
                    <ErrorBoundary key={index}>
                        <Car
                            name={car.name}
                            year={car.year}
                            index={index}
                            onDelete={this.deleteHandler.bind(this, index)}
                            onChangeName={event => this.onChangeName(event.target.value, index)}
                        />
                    </ErrorBoundary>
                )
            })
        }

        return (
            <div style={divStyle}>
                {/*<h1>{this.state.pageTitle}</h1>*/}
                <h1>{this.props.title}</h1>

                <ClickedContext.Provider value={this.state.clicked}>
                <Counter />
                </ClickedContext.Provider>
                {/*<input type="text" onChange={this.handleInput}/>*/}

                <hr/>
                <button
                    style={{marginTop: "20px"}}
                    className={"AppButton"}
                    onClick={this.toggleCarsHandler}
                >Toggle cars

                    <button onClick={() =>
                    {this.setState({clicked: true})}
                    }>Change clicked</button>

                </button>

                <div style={{
                    width: 400,
                    margin: "auto",
                    paddingTop: "20px"
                }}>
                    {cars}</div>
            </div>
        )
    }
}

export default PreviouslyApp;
