import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import InitWindow from "./containers/InitWindow/InitWindow";
import MenuItem from "./components/MenuItem/MenuItem";

const menuItems = [
    {
        label:'Переименование фото/файлов',
        url: '/RenameFiles',
        path: 'RenameFiles',
        component: InitWindow
        // submenu: [
        //     {
        //         label: 'Список',
        //         url: '/Users',
        //         path: 'Users',
        //         component: UsersList
        //     }
        // ]
    }];

class ChangeNamesFactoryIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    };

    MenuLinks = () => {
        return menuItems.map((Item, index) =>
            <MenuItem closeMenuHandler={this.props.closeMenuHandler} Item={Item} key={Item.url + index}/>
        );
    };

    render() {
        return (
            <Router>
                <div>
                    <ul className="MenuLinks">
                        {this.MenuLinks()}
                    </ul>
                </div>

                <Route path={'/RenameFiles'} component={InitWindow}/>
            </Router>
        );
    }
}

export default ChangeNamesFactoryIndex;