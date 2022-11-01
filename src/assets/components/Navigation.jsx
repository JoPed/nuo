//React router dom
import { useNavigate, NavLink } from 'react-router-dom';

//Minified css (compiled from SCSS)
import "../css/Navigation.min.css";

const Navigation = () => {

    const navigate = useNavigate();

    const goToHome = () => {

        navigate("/");
    }

    return (
        <nav id="navbar">
            {/** Navbar with image and three boxes. 
            * Has a seperate stylesheet -> Navigation.scss*/}


            <ul id="navlist">
                <li>
                    <img
                        src="/assets/images/back.svg"
                        alt="Back to home"
                        onClick={goToHome} />
                </li>

                <li className="ms-auto ms-md-0">
                    <NavLink to="/whatwedo"
                        className="navlink navlink--WhatWeDo">
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/maintainable"
                        className="navlink navlink--Maintainable">
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/getintouch"
                        className="navlink navlink--GetInTouch">
                    </NavLink>
                </li>
            </ul>
        </nav>
    );

}

export default Navigation;