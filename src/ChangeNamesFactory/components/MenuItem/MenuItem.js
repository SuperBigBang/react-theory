import React, { Component, PropTypes } from 'react';
import { NavLink } from 'react-router-dom'
import './MenuItem.css'

class MenuItem extends Component { 

    constructor(props) {
        super(props);
        this.state = { 
        	isSubMenuOpen: false 
        }
    }

    subMenuHandler = () => {
    	this.setState({
    		isSubMenuOpen: !this.state.isSubMenuOpen
    	})
    };

    submenuRender = (submenu, cls) =>{ 

    		if(submenu){
    			var SubMenuLinks = submenu.map((Item, index) =>
					<li key={Item["label"]+index}>
						<NavLink onClick={this.props.closeMenuHandler} to={Item['url']} className="subMenuLink" activeClassName="activeItem">
							{ Item["label"] }
						</NavLink>
					</li>
				);
    		} else {
    			var SubMenuLinks = ""
    		}  
    		return (
    			<ul className={ cls.join(' ') }>
    				{SubMenuLinks}

    			</ul>
    		)    	
    }

    open_icon = () => {
        let chevron = ['fas']
        if(!this.state.isSubMenuOpen){
            chevron.push('fa-chevron-down')
        }else{
            chevron.push('fa-chevron-up')
        }
        return ( 
            <i className={ chevron.join(' ') } >&nbsp;</i>
        ) 
    }
    
    render() {
    	const { label, url, submenu } = this.props.Item
    	const cls = ['subMenu']
        var icon = ''

        if(submenu){
            icon = this.open_icon() 
        } 

    	if(this.state.isSubMenuOpen){
    		cls.push('subMenu_open')
    	}

        var sub_m = this.submenuRender(submenu, cls)
        return (
	        <li className="MenuItem">
                {
                    submenu?
                        <React.Fragment>
                            <div className="MenuLink" onClick={ this.subMenuHandler }>
                                    {icon} {label}
                            </div>
                            {sub_m}
                        </React.Fragment>
                    :
                        
                        <NavLink onClick={this.props.closeMenuHandler} to={url} className="MenuLink" activeClassName="activeItem" >                     
                            {icon} {label}
                        </NavLink>
                }   
	        </li>

        );
    }
}

export default MenuItem;

