import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = ({data}) => {



    return (
        <Container fluid className="home px-0">

            <Container fluid="lg" className="px-0">

                <nav className="container-fluid" id="homeNavigation">

                    <figure id="nuoLogo"><img src="assets/images/logo-final.png" /></figure>

                    <ul>
                        <Row className="justify-content-center gy-4">                            

                            {data.home.map((item, index) => (
                                <Col xs={12} md={3} className="px-3 d-flex justify-content-center" key={index}>
                                    <li>
                                        {/* <Link to={item.linkRef}>
                                            <figure className="homePage_ImageContainer">
                                                <img className="mx-auto" src={item.pcImg}
                                                srcSet={`${item.mobileImg} 730w, ${item.pcImg} 220w`}
                                                sizes="(max-width: 767px) 730px, 220px"/>
                                                
                                                {index == 2 ? <span id="moreToCome">And yet... more to come</span> : ""}

                                            </figure>

                                        </Link> */}

                                        <Link to={item.linkRef}>
                                            <picture className="homePage_ImageContainer">

                                                <source media="(max-width: 767px)" srcSet={item.mobileImg} />
                                                <source media="(min-width: 768px)" srcSet={item.pcImg} />

                                                <img className="mx-auto" src={item.pcImg} alt={item.altText}/>
                                                
                                                {index == 2 ? <span id="moreToCome">And yet... more to come</span> : ""}

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