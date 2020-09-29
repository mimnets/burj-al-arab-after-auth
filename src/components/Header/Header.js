import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div style={{backgroundImage: 'liner-gradient(rgba(0,0,0))'}}>
            <nav className="nav">
                <ul>
                    <li>
                        <img src="../../image/logo" alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Ariabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;