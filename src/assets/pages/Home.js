import { Link } from "react-router-dom";

const Home = () => {

    return (

        <div className="home">
            <nav id="homeNavigation">
                <figure id="nuoLogo"><img src="assets/images/logo-final.png" /></figure>
                <ul>
                    <li><Link to="/whatwedo"><img src="/assets/images/desktop/front-whatwedo-link.png" /></Link></li>
                    <li><Link to="/maintainable"><img src="/assets/images/desktop/front-maintainable-link.png" /></Link></li>
                    <li><Link to="/getintouch"><img src="/assets/images/desktop/front-getintouch-link.png" /></Link></li>
                </ul>
                <button id="moreToCome">And yet... more to come</button>
            </nav>
        </div>





    )

}
export default Home;