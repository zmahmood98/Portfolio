import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';

const Header = () => {
    return (
        <div className={"nav"}>
            <nav>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
                <NavLink to="/background" activeClassName="active">My Background</NavLink>
                <NavLink to="/hobbies" activeClassName="active">Hobbies and Interests</NavLink>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </nav>
        </div>
    );
}

export default Header;

