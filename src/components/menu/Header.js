
import { Link } from 'react-router-dom'
import React, { Component } from 'react';


//Envoi l'url à main qui switch et return le bon component

class Header extends Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
