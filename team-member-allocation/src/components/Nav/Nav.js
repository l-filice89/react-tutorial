import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';


const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/GroupedTeamMembers">Teams</Link>
                </li>
            </ul>
        </nav>
    );
}

Nav.propTypes = {};

Nav.defaultProps = {};

export default Nav;
