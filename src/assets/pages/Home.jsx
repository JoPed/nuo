//React router dom
import { Link } from 'react-router-dom';

//React bootstrap imports - this is the recommended way to import them
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//*Landingpage
const Home = ({ content }) => {

    return (

        <Container fluid className="home px-0"> {/** Parent container with background color and height  */}

            {/** Content container*/}
            <Container fluid="lg" className="px-0">

                {/** Navbar - containing images not text  */}
                <nav className="container-fluid" id="homeNavigation">

                    <figure id="nuoLogo">
                        <img src="assets/images/logo-final.png"
                            alt="Nuo logo"
                        />
                    </figure>

                    <ul>
                        {/** The row of images */}
                        <Row className="justify-content-center gy-4">

                            {/** Looping through the home array from content.json making three Col elements with a image each*/}
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

                                                <img className="mx-auto" src={item.pcImg} alt={item.altText} />

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
            </Container>


        </Container>
    )

}
export default Home;