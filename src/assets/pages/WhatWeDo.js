import Navigation from "../components/Navigation";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhatWeDo = ({ data }) => {

    return (
        <Container fluid id="whatwedoContainer">

            <Container fluid="lg" >
                <Navigation />

                <Row>
                    <Col md={3} className="pageImageCol">
                        <figure className="pageImages">
                            <img className="" src="/assets/images/desktop/front-whatwedo.png" />
                        </figure>
                    </Col>

                    <Col md={7}>

                        <article>
                            {<h2>{data.headings[0]} <span id="secondHeadingWhatWeDo">{data.headings[1]}</span> ...</h2>}

                            <p id="whatwedoArticle">{data.paragraphs.map((item) => (
                                item
                            ))}
                            </p>

                                <span id="whatwedoTitle">What We Do</span>
                        </article>

                    </Col>
                </Row>


            </Container>

        </Container>
    )

}
export default WhatWeDo;