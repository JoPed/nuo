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
                        <figure className="pageImages">
                            <picture >
                                <source media="(max-width: 767px)" srcSet="/assets/images/mobile/mobil-getintouch.png" />
                                <source media="(min-width: 768px)" srcSet="/assets/images/desktop/front-getintouch.png" />

                                <img src="/assets/images/desktop/front-getintouch.png"
                                    alt="Get In Touch vertical banner" />
                            </picture>

                        </figure>

                    </Col>

                    <Col xs={12} md={7} className="mt-2 mt-md-0 pb-5 pb-md-0">
                        <article id="getInTouchArticle">
                            {<h2>{data.headings[0]} <span id="secondHeadingGetInTouch">{data.headings[1]}</span> ...</h2>}

                            <p className="mainText">{data.paragraphs.map(item => item)}</p>

                            <Row className="mt-4 justify-content-center justify-content-lg-start">

                                {data.employeeImages.map(item => (
                                    <Col xs={3} lg={{ span: 2, offset: item.colOffset }} className={item.colClassNames} key={item.index}>
                                        <figure className="employeePortrait">
                                            <img src={item.img} alt={item.altText} data-index={item.index} onClick={openModal} />
                                            <figcaption className="employeeCaption">{item.figCaption}</figcaption>
                                        </figure>
                                    </Col>
                                ))}
                            </Row>

                            <span className="titleGetInTouch d-none d-lg-block">{data.title}</span>

                        </article>
                    </Col>

                </Row>

                <Row className="mt-5 pb-3 d-md-none">
                    <Col className="px-0">
                        <figure className="nuoLogoSubPages"><img src="/assets/images/mobile/logo-b.png" alt="Nuo logo" /></figure>
                    </Col>
                </Row>
            </Container>

            <Modal isOpen={open} closeModal={closeModal} employeeNames={data.employeeNames[index]} />

        </Container>
    )

}
export default GetInTouch;