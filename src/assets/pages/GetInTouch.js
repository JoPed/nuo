//Components
import Navigation from "../components/Navigation";

//React-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GetInTouch = ({ data }) => {

    return (
        <Container fluid id="getInTouchContainer">
            <Container fluid="lg">
                <Navigation />

                <Row>
                    <Col md={3} className="pageImageCol">
                        <figure className="pageImages"><img src="/assets/images/desktop/front-getintouch.png" alt="Get In Touch vertical banner" /></figure>
                    </Col>

                    <Col md={7} className="px-0">
                        <article>
                            {<h2>{data.headings[0]} <span id="secondHeadingGetInTouch">{data.headings[1]}</span> ...</h2>}

                            <p className="mainText">{data.paragraphs.map(item => item)}</p>

                            <Row className="mt-4">
                                <Col md={{ span: 2, offset: 3 }} className="px-0 me-2">
                                    <figure className="employeePortrait">
                                        <img src="/assets/images/desktop/whatwedo-small.png" alt="Get in touch with Employee 1" />
                                        <figcaption className="employeeCaption">lt@coolish.com</figcaption>
                                    </figure>
                                </Col>
                                <Col md={2} className="px-0 me-2">
                                    <figure className="employeePortrait"><img src="/assets/images/desktop/maintainable-small.png" alt="Get in touch with Employee 2" />
                                    <figcaption className="employeeCaption">pr@coolish.com</figcaption>
                                    </figure>
                                </Col>
                                <Col md={2} className="px-0">
                                    <figure className="employeePortrait">
                                        <img src="/assets/images/desktop/getintouch-small.png" alt="Get in touch with Employee 3" />
                                        <figcaption className="employeeCaption">mn@coolish.com</figcaption>
                                    </figure>
                                </Col>
                            </Row>

                            <span className="titleGetInTouch">{data.title}</span>

                        </article>
                    </Col>

                </Row>
            </Container>
        </Container>
    )

}
export default GetInTouch;