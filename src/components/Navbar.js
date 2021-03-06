import React from "react";
import { Link, NavLink} from "react-router-dom";
import BlogDetail from "./BlogDetail";

const navbar = () =>(
    <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
        <div className={"container-fluid"}>
            <Link className={"navbar-brand"} to={"/"}>Navbar</Link>
            <button
                className={"navbar-toggler"}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className={"navbar-toggler-icon"}>(current)</span>
            </button>
            <div className={"collapse navbar-collapse"} id="navbarNav">
                <ul className={"navbar-nav"}>
                    <li className={"nav-item active"}>
                        <NavLink className={"nav-link active"} exact to={"/"}>Home <span className={"sr-only"}> </span></NavLink>
                    </li>
                    <li className={"nav-item"}>
                        <NavLink className={"nav-link"} exact to={"/blog"}>Blog</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default navbar;