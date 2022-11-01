//Components
import Navigation from '../components/Navigation';

//React-Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const WhatWeDo = ({ content }) => {

    return (
        <Container fluid id="whatwedoContainer">

            {/**Content container */}
            <Container fluid="lg">

                {/** Subpage navigation (the three box and the image (to navigate between pages) */}
                <Navigation />

                {/** Row of front image and text */}
                <Row>
                    <Col xs={12} md={3} className="pageImageCol">

                        <figure className="pageImages">

                            {/** Choose the correct image depending on screen size. 
                             * Default if something goes wrong will be the src from <img /> element */}
                            <picture>
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="/assets/images/mobile/mobil-whatwedo.png"
                                />

                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/desktop/front-whatwedo.png"
                                />

                                <img
                                    src="/assets/images/desktop/front-whatwedo.png"
                                    alt="What We Do banner"
                                />
                            </picture>

                        </figure>


                    </Col>

                    {/**Column of text */}
                    <Col
                        xs={12} md={7}
                        className="mt-2 mt-md-0 pb-5 pb-md-0">

                        <article>
                            {/* Take the first element of heading array inside content.json and directly inside h2, 
                            then take second element of heading array and put into a span tag to change it's color. */}
                            {
                                <h2>{content.headings[0]}
                                    <span id="secondHeadingWhatWeDo">
                                        {content.headings[1]}
                                    </span>
                                    ...</h2>
                            }

                            {/**The text */}
                            <p className="mainText">
                                {content.paragraphs.map(item => item)}
                            </p>

                            {/**The text box*/}
                            <span className="title d-none d-lg-block">
                                {content.title}
                            </span>

                        </article>

                    </Col>
                </Row>

            </Container>

            <div className="logo-row">
                {/**logo, but only show on screens below 768px*/}
                <figure className="nuoLogoSubPages d-md-none">
                    <img src="/assets/images/mobile/logo-a.png"
                        alt="Nuo logo"

                    />
                </figure>
            </div>

        </Container>
    )

}
export default WhatWeDo;