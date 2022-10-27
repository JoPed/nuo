import { NavLink } from "react-router-dom";
import "../css/Navigation.min.css";
import { useNavigate } from "react-router-dom";

import Container from "react-bootstrap/Container";

const Navigation = () => {

    const navigate = useNavigate();

    const backToHome = ()=>{
        navigate("/");
    }

    return (

        <nav id="navbar">
            <ul id="navlist">
                <li><img src="/assets/images/back.svg" alt="Back to home" onClick={backToHome}/></li>
                <li><NavLink to="/whatwedo" className="navlink navlink--whatwedo"></NavLink></li>
                <li><NavLink to="/maintainable" className="navlink navlink--maintainable"></NavLink></li>
                <li><NavLink to="/getintouch" className="navlink navlink--getintouch"></NavLink></li>
            </ul>
        </nav>
    );

}

export default Navigation;