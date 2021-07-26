import React from "react";
import {Link} from "react-router-dom";

const home = () =>(
    <div className={"p-5 mb-4 bg-light rounded-3"}>
        <div className={"container-fluid py-5"}>
            <h1 className={"display-5 fw-bold"}>Welcome to Blog KE!</h1>
            <p className={"col-md-8 fs-4"}>Some information about Blog KE...</p>
            <p className={"col-md-8 fs-4"}>Click the button, and here we go)</p>
            <Link className={"btn btn-primary btn-lg"} to={"/blog"} type="button">Check out our Blog</Link>
        </div>
    </div>
);

export default home;