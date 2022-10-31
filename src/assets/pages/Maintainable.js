//Components
import Navigation from "../components/Navigation";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Maintainable = ({ data }) => {

    return (
        <Container fluid id="maintainableContainer">

            <Container fluid="lg">
                <Navigation />

                <Row>
                    <Col md={3} className="pageImageCol">

                        <figure className="pageImages">
                            <picture >
                                <source media="(max-width: 767px)" srcSet="/assets/images/mobile/mobil-maintainable.png" />
                                <source media="(min-width: 768px)" srcSet="/assets/images/desktop/front-maintainable.png" />

                                <img src="/assets/images/desktop/front-maintainable.png" alt="Maintainable vertical banner" />
                            </picture>

                        </figure>



                    </Col>

                    <Col md={7} className="mt-2 mt-md-0 pb-5 pb-md-0">

                        <article>
                            {<h2>{data.headings[0]} <span id="secondHeadingMaintainable">{data.headings[1]}</span> ...</h2>}

                            <p className="mainText">{data.paragraphs.map(item => item)}</p>

                            <span className="title d-none d-lg-block">{data.title}</span>
                        </article>

                    </Col>
                </Row>

                <Row className="mt-5 pb-3 d-md-none">
                    <Col className="px-0">
                        <figure className="nuoLogoSubPages"><img src="/assets/images/mobile/logo-a.png" alt="Nuo logo" /></figure>
                    </Col>
                </Row>
            </Container>

        </Container>

    );

}
export default Maintainable;