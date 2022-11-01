//React
import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import { isMobile, isTablet, isDesktop} from 'react-device-detect';


//React bootstrap - bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormGroup from 'react-bootstrap/FormGroup';
import FormText from 'react-bootstrap/FormText';

//react hook form
import { useForm } from 'react-hook-form';

//Yup resolver
import { yupResolver } from '@hookform/resolvers/yup';

//schema for validation
import { Schema } from './Schema';


const Modal = ({ isModalOpen, closeModal, employeeNames }) => {

    //useForm hook. By setting the default values to '' the form fields values can be reset isSubmitSuccessful
    const { register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset } = useForm({
        resolver: yupResolver(Schema),
        defaultValues: {
            name: '',
            email: '',
            subject: '',
            textArea: ''
        }
    });

    // Creating a useState to store the datasubmitted from the form. Starting value of empty object
    const [submittetData, setSubmittedData] = useState({});

    //useRef used to get the modal element, and scrollintoview
    let modalRef = useRef();

    //Setting the useState to the data object containing the values from the form
    const onSubmit = (formData) => {

        setSubmittedData(formData);

    }

    const resetForm = () => {
        reset({ name: '', email: '', subject: '', textArea: '' });
    }


    //Used to make sure isSubmitSuccessful is set to true, before cheking the value.
    useEffect(() => {

        if (isModalOpen) {
            modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });

            if (isDesktop) {

                if (modalRef.current.classList.contains("mobileView")) {
                    modalRef.current.classList.remove("mobileView");
                }
            }
            else if (isTablet || isMobile) {

                if (!modalRef.current.classList.contains("mobileView")) {
                    modalRef.current.classList.add("mobileView");
                }
            }
        }

    }, [isModalOpen]);

    //Is the open useState from GetInTouch component is false then don't render anything.
    if (!isModalOpen) return false;


    return ReactDOM.createPortal(

        <div id="modal" ref={modalRef}>

            {/**Close icon */}
            <div id="close">

                <img src="/assets/images/close.svg"
                    alt="Close the modal window"
                    onClick={closeModal}
                />

            </div>

            <h2>Kundeservicemedarbjeder: {employeeNames}</h2>

            <div id="formContainer" className=" p-3">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <FormGroup>
                            <Col className="mb-2">
                                <label className="labels">Full name</label>
                            </Col>

                            <Col>
                                {/** Register the name input field and get the validation conditions from the schema object */}
                                <input id="name" type="text" className="formInput"
                                    {...register('name')} />

                                <FormText className="ms-1 errorText">

                                    {/**If there is an error with the name field, show the error message */}
                                    {errors.name?.message}
                                </FormText>

                            </Col>
                        </FormGroup>
                    </Row>

                    <Row className="mb-3">
                        <FormGroup>
                            <Col className="mb-2">
                                <label className="labels">Email</label>
                            </Col>

                            <Col>
                                <input
                                    id="email"
                                    type="email"
                                    className="formInput"
                                    {...register('email')}
                                />

                                <FormText className="ms-1 errorText">
                                    {errors.email?.message}
                                </FormText>

                            </Col>
                        </FormGroup>
                    </Row>

                    <Row className="mb-3">
                        <FormGroup>
                            <Col className="mb-2">
                                <label className="labels">Subject</label>
                            </Col>

                            <Col>
                                <input
                                    id="subject"
                                    type="text"
                                    className="formInput"
                                    {...register('subject')}
                                />

                                <FormText className="ms-1 errorText">
                                    {errors.subject?.message}
                                </FormText>

                            </Col>
                        </FormGroup>
                    </Row>

                    <Row className="mb-3">
                        <FormGroup>
                            <Col className="mb-2">
                                <label className="labels">Your message</label>
                            </Col>

                            <Col>
                                <textarea id="formTextArea"
                                    {...register('textArea')} />

                                <FormText className="ms-1 errorText">
                                    {errors.textArea?.message}
                                </FormText>

                            </Col>
                        </FormGroup>
                    </Row>

                    {/** If nothing has been submitted then only show the Submit button */}
                    {!isSubmitSuccessful && (
                        <Row className="mb-3">
                            <Col>
                                <button className="mx-auto d-block"
                                    id="btnSubmit">
                                    Submit
                                </button>
                            </Col>
                        </Row>

                    )}

                    {/**If something has been submitted change submit button to 
                     * Reset button and make a new FormText element with a success message */}
                    {isSubmitSuccessful && (

                        <>
                            <Row className="mb-3">
                                <Col>
                                    <button className="mx-auto d-block"
                                        id="btnSubmit"
                                        onClick={resetForm}>
                                        Reset</button>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <FormText className="successText">
                                        {/**Make sure the first letter of the name is in uppercase, 
                                         * even if the value from the name input is in lower case */}
                                        {
                                            submittetData.name.charAt(0).toUpperCase() +
                                            submittetData.name.slice(1) + ' '
                                        }
                                        your message has been sent. I will get back to you on
                                        {' ' + submittetData.email} within a couple of days.
                                    </FormText>
                                </Col>
                            </Row>
                        </>
                    )}

                </form>

            </div>

            {/**Place the modal window inside the article on the getintouch page. */}
        </div>, document.querySelector('#getInTouchArticle')


    );

}
export default Modal;