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

                        <Row className="justify-content-center">
                            <Col md={{ span: 3 }}
                                className="px-0 d-flex justify-content-center">
                                <li><Link to="/whatwedo" ><img src="/assets/images/desktop/front-whatwedo-link.png" className="mx-auto" /></Link></li>
                            </Col>

                            <Col md={3} className="px-0 d-flex justify-content-center">
                                <li><Link to="/maintainable"><img src="/assets/images/desktop/front-maintainable-link.png" className="mx-auto" /></Link></li>
                            </Col>

                            <Col md={3} className="px-0 d-flex justify-content-center">
                                <li >
                                    <Link to="/getintouch">
                                        <figure id="moreToComeContainer">
                                            <img src="/assets/images/desktop/front-getintouch-link.png" className="mx-auto" />
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