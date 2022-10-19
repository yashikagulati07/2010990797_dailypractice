import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Navbar.css';
export default function Navbar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"black", position:"sticky"}}>
            <div className="container">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto" >
                        <li className="nav-item-img">
                            <NavLink className="nav-link " to="/" > <img src={require("../pages/icon/logo1.png")} alt = "logo" /> </NavLink>
                        </li>                       

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" > Login</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/details">Details</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>  

                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/image"> Image </NavLink>
                        </li> */}
                        
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/image-uploader"> Image </NavLink>
                        </li>

                    </ul>
                </div>

                <Link className="btn btn-outline-light" to="/users/add">Add User</Link>
            </div>
        </nav>
    );
};

