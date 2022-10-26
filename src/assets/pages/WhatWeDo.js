//Components
import Navigation from "../components/Navigation";

//React-Bootstrap
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
                            <img src="/assets/images/desktop/front-whatwedo.png" alt="What we do vertical banner"/>
                        </figure>
                    </Col>

                    <Col md={7} className="px-0">

                        <article>
                            {<h2>{data.headings[0]} <span id="secondHeadingWhatWeDo">{data.headings[1]}</span> ...</h2>}

                            <p className="mainText">{data.paragraphs.map(item =>  item)}</p>

                                <span className="title">{data.title}</span>
                        </article>

                    </Col>
                </Row>


            </Container>

        </Container>
    )

}
export default WhatWeDo;