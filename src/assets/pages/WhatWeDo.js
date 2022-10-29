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
                    <Col xs={12} md={3} className="pageImageCol">
                        <figure className="pageImages">
                            <img src="/assets/images/desktop/front-whatwedo.png" 
                            alt="What we do vertical banner"
                            srcSet="/assets/images/mobile/mobil-whatwedo.png 730w,
                            /assets/images/desktop/front-whatwedo.png 220w"
                            sizes="(max-width: 767px) 730px, 220px"/>
                        </figure>
                    </Col>

                    <Col xs={12} md={7} className="mt-2 mt-md-0 pb-5 pb-md-0">

                        <article>
                            {<h2>{data.headings[0]} <span id="secondHeadingWhatWeDo">{data.headings[1]}</span> ...</h2>}

                            <p className="mainText">{data.paragraphs.map(item =>  item)}</p>

                                <span className="title d-none d-lg-block">{data.title}</span>
                        </article>

                    </Col>
                </Row>

                <Row className="mt-5 pb-5 d-md-none">
                    <Col>
                    <figure className="nuoLogoSubPages  ms-auto"><img src="/assets/images/mobile/logo-a.png" alt="Nuo logo" /></figure>
                    </Col>
                </Row>

                



            </Container>

        </Container>
    )

}
export default WhatWeDo;