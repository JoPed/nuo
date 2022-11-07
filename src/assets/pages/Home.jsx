//React router dom
import { Link, useLocation } from 'react-router-dom';

//React bootstrap imports - this is the recommended way to import them
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useContext } from 'react';

import { ContainerRefContext } from '../../App';


//*Landingpage
const Home = ({ content}) => {

    const location = useLocation();

    const containerRef = useContext(ContainerRefContext);

    useEffect(() => {

        console.log(location)

        if(location.pathname === "/"){
            document.querySelector("#navbar").style.display = "none";
        }

        containerRef.current.id = "home";

        return () => {
            containerRef.current.id = "";
            document.querySelector("#navbar").style.display = "block";
        }

    });

    return (

        <>

            {/** Navbar - containing images not text  */}
            <nav
                className="container-fluid"
                id="homeNavigation"
            >

                <figure id="nuoLogo">
                    <img
                        src="/assets/images/logo-final.webp"
                        alt="Nuo logo"
                    />
                </figure>

                <ul>
                    {/** The row of images */}
                    <Row className="justify-content-center gy-4">

                        {/** Looping through the home array from content.json 
                              making three Col elements with a image each*/}
                        {content.home.map((item, index) => (
                            <Col
                                xs={12}
                                md={3}
                                className="px-3 d-flex justify-content-center"
                                key={item.uniqueID}>

                                <li>

                                    <Link to={item.linkRef}>
                                        <picture className="homePage_ImageContainer">
                                            {/** Depending on screensize use the correct image */}
                                            <source
                                                media="(max-width: 767px)"
                                                srcSet={item.mobileImg}
                                            />

                                            <source
                                                media="(min-width: 768px)"
                                                srcSet={item.pcImg}
                                            />

                                            <img
                                                className="mx-auto"
                                                src={item.pcImg}
                                                alt={item.altText} />

                                            {/**Placing the more to come text box below the last image (which has an index value of 2)  */}
                                            {index === 2 ?
                                                (<span id="moreToCome">
                                                    And yet... more to come
                                                </span>) : ""}

                                        </picture>

                                    </Link>
                                </li>

                            </Col>
                        ))}

                    </Row>

                </ul>

            </nav>


        </>
    )

}
export default Home;