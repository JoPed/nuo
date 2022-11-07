//React router dom
import { NavLink } from 'react-router-dom';

//Minified css (compiled from SCSS)
import "../css/Navigation.min.css";

const Navigation = ({navData}) => {

    return (
        <nav id="navbar">
            {/** Navbar with image and three boxes. 
            * Has a seperate stylesheet -> Navigation.scss*/}


            <ul id="navlist">
                <li>
                    <NavLink to="/">
                        <img
                            src="./assets/images/back.svg"
                            alt="Back to home"
                        />
                    </NavLink>

                </li>

                {
                    navData.map(navItem => (
                        <li 
                        key={navItem.uniqueID}
                        className={navItem.hasOwnProperty("listItemClassNames") ? 
                        navItem.listItemClassNames : ""}>

                            <NavLink to={navItem.linkRef} className={navItem.linkClassNames} />

                        </li>
                    ))
                }

            </ul>
        </nav>
    );

}

export default Navigation;