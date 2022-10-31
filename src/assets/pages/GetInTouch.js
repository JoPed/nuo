//Components
import Navigation from "../components/Navigation";
import Modal from "../components/Modal";

//React-bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//React
import { useState } from "react";

//* Subpage GetInTouch
const GetInTouch = ({ data }) => {
    // getting and setting the open state of the modal window (true = open, false = closed)
    const [open, setOpen] = useState(false);

    //getting and setting index used to show dymanic data in the modal window, depending of which image is pressed
    const [index, setIndex] = useState(0);

    /** When one of the employee images is pressed open the modal window */
    const openModal = e => {
        setOpen(true);
        setIndex(e.currentTarget.dataset.index);
    }

    /** When close button is pressed, close the modal */
    const closeModal = () => setOpen(false);


    return (
        <Container fluid id="getInTouchContainer"> {/** Parent container with background color and height  */}

            <Container fluid="lg">

                {/** Subpage navigation (the three box and the image (to navigate between pages) */}
                <Navigation />

                {/** Parent Row element for images and text  */}
                <Row>

                    {/** Parent column element with the big front image*/}
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

                    {/*Parent column with article as child */}
                    <Col xs={12} md={7} className="mt-2 mt-md-0 pb-5 pb-md-0">

                        <article id="getInTouchArticle">

                            {/*Heading */}
                            {<h2>{data.headings[0]} <span id="secondHeadingGetInTouch">{data.headings[1]}</span> ...</h2>}

                            {/* The text content */}
                            <p className="mainText">{data.paragraphs.map(item => item)}</p>

                            {/* A row inside article. Has the employee images a chrildren */}
                            <Row className="mt-4 justify-content-center justify-content-lg-start">

                                {/* Takes the data from content.json and iterates the employeeImages array */}
                                {data.employeeImages.map(item => (
                                    <Col xs={3} lg={{ span: 2, offset: item.colOffset }} className={item.colClassNames} key={item.index}>
                                        <figure className="employeePortrait">
                                            <img src={item.img} alt={item.altText} data-index={item.index} onClick={openModal} />
                                            <figcaption className="employeeCaption">{item.figCaption}</figcaption>
                                        </figure>
                                    </Col>
                                ))}
                            </Row>

                            {/*The text box */}
                            <span className="titleGetInTouch d-none d-lg-block">{data.title}</span>

                        </article>
                    </Col>

                </Row>

                {/**logo, but only show on screens below 768px*/}
                <div className="logoContainer">
                    <figure className="nuoLogoSubPages d-md-none"><img src="/assets/images/mobile/logo-b.png" alt="Nuo logo" /></figure>
                </div>


            </Container>

            {/* Modal window compoment */}
            <Modal 
            isOpen={open} 
            closeModal={closeModal} 
            employeeNames={data.employeeNames[index]} />

        </Container>
    )

}
export default GetInTouch;