import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Posts</Link>
                </li>
                <li>|</li>
                <li>
                    <Link to="/new">New Post</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
