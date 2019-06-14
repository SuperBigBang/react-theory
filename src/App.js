import React, {Component} from 'react';
import './App.scss';
import ChangeNamesFactoryIndex from "./ChangeNamesFactory/ChangeNamesFactoryIndex"

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return <ChangeNamesFactoryIndex/>;
    }
}

export default App;
