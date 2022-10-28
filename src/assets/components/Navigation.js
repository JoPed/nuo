import { NavLink } from "react-router-dom";
import "../css/Navigation.min.css";
import { useNavigate } from "react-router-dom";

const Navigation = () => {

    const navigate = useNavigate();

    const backToHome = ()=>{
        navigate("/");
    }

    return (

        <nav id="navbar">
            <ul id="navlist">
                <li><img src="/assets/images/back.svg" alt="Back to home" onClick={backToHome}/></li>
                <li className="ms-auto ms-md-0"><NavLink to="/whatwedo" className="navlink navlink--WhatWeDo"></NavLink></li>
                <li><NavLink to="/maintainable" className="navlink navlink--Maintainable"></NavLink></li>
                <li><NavLink to="/getintouch" className="navlink navlink--GetInTouch"></NavLink></li>
            </ul>
        </nav>
    );

}

export default Navigation;