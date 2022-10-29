import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {



    return (
        <Container fluid className="home px-0">

            <Container fluid="lg" className="px-0">

                <nav className="container-fluid" id="homeNavigation">

                    <figure id="nuoLogo"><img src="assets/images/logo-final.png" /></figure>

                    <ul>

                        <Row className="justify-content-center gy-4">
                            <Col xs={12} md={{ span: 3 }}
                                className="px-0 d-flex justify-content-center">
                                <li>
                                    <Link to="/whatwedo" >
                                        <figure className="homePage_ImageContainer">
                                            <img className="mx-auto"
                                                srcSet="/assets/images/mobile/mobil-whatwedo.png 730w,
                                        /assets/images/desktop/front-whatwedo-link.png 220w"
                                                sizes="(max-width: 767px) 730px, 220px"  
                                                src="/assets/images/desktop/front-whatwedo-link.png"/>
                                        </figure>

                                    </Link>
                                </li>
                            </Col>

                            <Col xs={12} md={3} className="px-0 d-flex justify-content-center">
                                <li>
                                    <Link to="/maintainable">
                                        <figure className="homePage_ImageContainer">
                                            <img className="mx-auto" src="/assets/images/desktop/front-maintainable-link.png"
                                                srcSet="/assets/images/mobile/mobil-maintainable.png 730w,
                                        /assets/images/desktop/front-maintainable-link.png 220w"
                                                sizes="(max-width: 767px) 730px, 220px" />
                                        </figure>

                                    </Link>
                                </li>
                            </Col>

                            <Col xs={12} md={3} className="px-0 d-flex justify-content-center">
                                <li >
                                    <Link to="/getintouch">
                                        <figure className="homePage_ImageContainer">
                                            <img className="mx-auto" src="/assets/images/desktop/front-getintouch-link.png"
                                                srcSet="/assets/images/mobile/mobil-getintouch.png 730w,
                                            /assets/images/desktop/front-getintouch-link.png 220w"
                                                sizes="(max-width: 767px) 730px, 220px" />
                                            <p id="moreToCome">And yet... more to come</p>
                                        </figure>
                                    </Link>

                                </li>
                            </Col>

                        </Row>




                    </ul>

                </nav>
            </Container>


        </Container>
    )

}
export default Home;