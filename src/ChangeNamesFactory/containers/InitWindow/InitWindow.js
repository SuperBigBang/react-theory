import React, {Component} from 'react';
import FilesInputForm from "../../components/FilesInputForm/FilesInputForm"
import FilesSaveForm from "../../components/FilesSaveForm/FilesSaveForm"

class InitWindow extends Component {

    constructor(props) {
        super(props);
        this.state = {
            saveFileURL: ""};
    };

    makeURLForSaveNewFileHandler=(fileContent)=>{
        this.setState({saveFileURL: <FilesSaveForm fileContent={fileContent}/>})
    };

    render() {
        return (<div>
            <FilesInputForm makeURLForSaveNewFileHandler={this.makeURLForSaveNewFileHandler}/>
            {this.state.saveFileURL}
        </div>);
    }
}

export default InitWindow;