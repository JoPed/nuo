//Components
import Navigation from '../components/Navigation';
import Modal from '../components/Modal';

//React-bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//React
import { useState, useEffect } from 'react';

import { isMobile, isTablet, isDesktop} from 'react-device-detect';
import { useRef } from 'react';

//* Subpage GetInTouch
const GetInTouch = ({ content }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [employeeCount, setEmployeeCount] = useState(0);

    const employeePortraitRef = useRef([]);

    useEffect(() => {

        employeePortraitRef.current.map((ref) => {

            if (isDesktop) {

                console.log("isDesktop");

                if (!ref.classList.contains("enablePointer")) {
                    ref.classList.add("enablePointer");
                }
            }
            else if (isTablet || isMobile) {

                console.log("tablet or mobile");

                if (ref.classList.contains("enablePointer")) {
                    ref.classList.remove("enablePointer");
                }
            }
        })

    }, [])

    /** When one of the employee images is pressed open the modal window */
    const openModal = e => {
        e.preventDefault();
        setIsModalOpen(true);
        setEmployeeCount(e.currentTarget.dataset.index);
    }

    /** When close button is pressed, close the modal */
    const closeModal = () => setIsModalOpen(false);


    return (


        <Container fluid id='getInTouchContainer'> {/** Parent container with background color and height  */}
            <Container fluid="lg">

                {/** Subpage navigation (the three box and the image (to navigate between pages) */}
                <Navigation />

                {/** Parent Row element for images and text  */}
                <Row>

                    {/** Parent column element with the big front image*/}
                    <Col md={3} className="pageImageCol">
                        <figure className="pageImages">

                            <picture >
                                <source
                                    media="(max-width: 767px)"
                                    srcSet="/assets/images/mobile/mobil-getintouch.png" />

                                <source
                                    media="(min-width: 768px)"
                                    srcSet="/assets/images/desktop/front-getintouch.png" />

                                <img
                                    src="/assets/images/desktop/front-getintouch.png"
                                    alt="Get In Touch banner"
                                />

                            </picture>

                        </figure>

                    </Col>

                    {/*Parent column with article as child */}
                    <Col xs={12} md={7} className="mt-2 mt-md-0 pb-5 pb-md-0">

                        <article id="getInTouchArticle">

                            {/*Heading */}
                            {
                                <h2>{content.headings[0]}
                                    <span id="secondHeadingGetInTouch">
                                        {content.headings[1]}
                                    </span>
                                    ...</h2>}

                            {/* The text content */}
                            <p className="mainText">
                                {content.paragraphs.map(item => item)}
                            </p>

                            {/* A row inside article. Has the employee images a chrildren */}
                            <Row className="mt-4 justify-content-center justify-content-lg-start">

                                {/* Takes the data from content.json and iterates the employeeImages array */}
                                {content.employeeImages.map((item, index) => (

                                    <Col xs={3}
                                        lg={{ span: 2, offset: item.colOffset }}
                                        className={item.colClassNames}
                                        key={item.uniqueID}>

                                        {/** using ref to make an useRef array, to store multiple employeePortrait images */}
                                        <figure className="employeePortrait"
                                            ref={ref => (employeePortraitRef.current[index] = ref)}
                                        >
                                            <img
                                                src={item.img}
                                                alt={item.altText}
                                                data-index={employeeCount}
                                                onClick={openModal}
                                                draggable="false"
                                            />

                                            <figcaption className="employeeCaption">
                                                {item.figCaption}
                                            </figcaption>
                                        </figure>


                                    </Col>
                                ))}
                            </Row>

                            {/*The text box */}
                            <span className="titleGetInTouch d-none d-lg-block">
                                {content.title}
                            </span>

                        </article>
                    </Col>

                </Row>

            </Container>

            {/* Modal window compoment */}
            <Modal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                employeeNames={content.employeeNames[employeeCount]}
            />

            <Row className="logo-row">
                {/**logo, but only show on screens below 768px*/}
                <figure className="nuoLogoSubPages d-md-none">
                    <img src="/assets/images/mobile/logo-b.png"
                        alt="Nuo logo"

                    />
                </figure>
            </Row>

        </Container>


    )

}

export default GetInTouch;