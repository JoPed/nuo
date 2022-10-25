import { Link } from "react-router-dom";

const Navigation = () => {

    return (

        <nav>
            <ul>
                <li><Link to="/whatwedo">WhatWeDo</Link></li>
                <li><Link to="/maintainable">Maintainable</Link></li>
                <li><Link to="/getintouch">GetInTouch</Link></li>
            </ul>
        </nav>
    );

}

export default Navigation;