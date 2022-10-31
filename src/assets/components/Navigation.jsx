//React router dom
import { useNavigate, NavLink  } from 'react-router-dom';

//Minified css (compiled from SCSS)
import "../css/Navigation.min.css";

const Navigation = () => {

    //instatiating a variable to use the useNavigate() hook
    const navigate = useNavigate();

    //Function to be called when back image is pressed
    const backToHome = () => {

        //the "/" represents the root of the project, which is the Home component
        navigate('/');
    }

    return (


        <nav id="navbar">{/** Navbar with image and three boxes. Has a seperate stylesheet -> Navigation.scss*/}
            <ul id="navlist">
                <li>
                    <img
                        src="/assets/images/back.svg"
                        alt="Back to home"
                        onClick={backToHome} />
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