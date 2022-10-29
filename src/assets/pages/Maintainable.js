//Components
import Navigation from "../components/Navigation";

//React-Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Maintainable = ({data}) => {

    return (
        <Container fluid id="maintainableContainer">

            <Container fluid="lg">
                <Navigation />

                <Row>
                    <Col md={3} className="pageImageCol">
                        <figure>
                            <img src="/assets/images/desktop/front-maintainable.png"
                            srcSet="/assets/images/mobile/mobil-maintainable.png 730w,
                            /assets/images/desktop/front-maintainable.png 220w"
                            sizes="(max-width: 767px) 730px, 220px"
                            alt="Maintainable vertical banner" />
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

                <Row className="mt-5 mt-md-0 pb-5 pb-md-0 d-md-none">
                    <Col>
                    <figure className="nuoLogoSubPages"><img src="/assets/images/mobile/logo-a.png" alt="Nuo logo" /></figure>
                    </Col>
                </Row>
            </Container>

        </Container>

    );

}
export default Maintainable;