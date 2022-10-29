//Components
import Navigation from "../components/Navigation";
import Modal from "../components/Modal";



//React-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//React
import { useState } from "react";

const GetInTouch = ({ data }) => {

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openModal = e => {
        setOpen(true);
        setIndex(e.currentTarget.dataset.index);

    }

    const closeModal = () => setOpen(false);


    return (
        <Container fluid id="getInTouchContainer">
            <Container fluid="lg">
                <Navigation />

                <Row>
                    <Col md={3} className="pageImageCol">
                        <figure>
                            <img src="/assets/images/desktop/front-getintouch.png"
                            srcSet="/assets/images/mobile/mobil-getintouch.png 730w,
                            /assets/images/desktop/front-getintouch.png 220w"
                            sizes="(max-width: 767px) 730px, 220px"
                             alt="Get In Touch vertical banner" />
                        </figure>
                    </Col>

                    <Col xs={12} md={7} className="mt-2 mt-md-0 pb-5 pb-md-0">
                        <article id="getInTouchArticle">
                            {<h2>{data.headings[0]} <span id="secondHeadingGetInTouch">{data.headings[1]}</span> ...</h2>}

                            <p className="mainText">{data.paragraphs.map(item => item)}</p>

                            <Row className="mt-4 justify-content-center justify-content-lg-start">
                                <Col xs={3} lg={{ span: 2, offset: 3 }} className="px-0 me-3 me-md-2">
                                    <figure className="employeePortrait">
                                        <img src="/assets/images/desktop/whatwedo-small.png" alt="Get in touch with Employee 1" data-index={0} onClick={openModal} />
                                        <figcaption className="employeeCaption">lt@coolish.com</figcaption>
                                    </figure>
                                </Col>
                                <Col xs={3} lg={2} className="px-0 me-3 me-md-2">
                                    <figure className="employeePortrait">
                                        <img src="/assets/images/desktop/maintainable-small.png" alt="Get in touch with Employee 2" data-index={1} onClick={openModal} />
                                        <figcaption className="employeeCaption">pr@coolish.com</figcaption>
                                    </figure>
                                </Col>
                                <Col xs={3} lg={2} className="px-0">
                                    <figure className="employeePortrait">
                                        <img src="/assets/images/desktop/getintouch-small.png" alt="Get in touch with Employee 3" data-index={2} onClick={openModal} />
                                        <figcaption className="employeeCaption">mn@coolish.com</figcaption>
                                    </figure>
                                </Col>
                            </Row>

                            <span className="titleGetInTouch d-none d-lg-block">{data.title}</span>

                        </article>
                    </Col>

                </Row>

                <Row className="mt-5 pb-5 d-md-none">
                    <Col>
                    <figure className="nuoLogoSubPages  ms-auto"><img src="/assets/images/mobile/logo-b.png" alt="Nuo logo" /></figure>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={open} closeModal={closeModal} employeeNames={data.employeeNames[index]} />

        </Container>
    )

}
export default GetInTouch;