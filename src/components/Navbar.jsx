import React, { Component } from 'react';
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom' 


export default class Navbar extends Component {   
    state={
        isOpen : false
    } 
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }

    render() {
        return (
            <nav className="navbar">
                <div className="nav__center">
                    <div className="nav__header">
                        <Link to="/>"><img src={logo} alt="OYO-LOGO" /></Link>
                        <button type = "button" className="nav__btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav__icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen?"nav__links show__nav":"nav__links"}>
                        <li>
                            <Link to ="/">Home</Link>                           
                        </li>
                        <li>
                            <Link to="/rooms">Rooms</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
