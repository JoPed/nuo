//React
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

//React bootstrap - bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormGroup from "react-bootstrap/FormGroup";
import FormText from "react-bootstrap/FormText";


import { schema } from "./Schema";
import { yupResolver } from "@hookform/resolvers/yup";





const Modal = ({ isOpen, closeModal, employeeNames }) => {

    const { register, handleSubmit, formState, formState: { errors, isSubmitSuccessful }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            name: "",
            email: "",
            subject: "",
            textArea: ""
        }
    });

    //*Creating a useState with default value of empty object
    const [submittetData, setSubmittedData] = useState({});

    const ref = useRef();

    //Setting the useState to the data object containing the values from the form
    const onSubmit = (formData) => {

        setSubmittedData(formData);
    }

    

    //Used to make sure isSubmitSuccessful is set to true, before cheking the value.
    useEffect(() => {

        if(isOpen){
            console.log(ref.current);
        }
        
        

        //Only when the submit is successful, should the form reset
        if (isSubmitSuccessful) {
            reset({ name: "", email: "", subject: "", textArea: "" });
        }

    }, [formState, submittetData, reset]);

    if (!isOpen) return false;

    return ReactDOM.createPortal(
        
            <div id="modal" ref={ref}>
                <div id="close"><img src="/assets/images/close.svg" alt="Close the modal window" onClick={closeModal} /></div>


                <h2>Kundeservicemedarbjeder: {employeeNames}</h2>

                <div id="formContainer" className=" p-3">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <FormGroup>
                                <Col className="mb-2"><label className="labels">Full name</label></Col>
                                <Col>
                                    <input id="name" type="text" className="formInput"
                                        {...register("name")} />

                                    <FormText className="ms-1 errorText">
                                        {errors.name?.message}
                                    </FormText>

                                </Col>
                            </FormGroup>
                        </Row>

                        <Row className="mb-3">
                            <FormGroup>
                                <Col className="mb-2"><label className="labels">Email</label></Col>
                                <Col>
                                    <input id="email" type="email" className="formInput"
                                        {...register("email")} />

                                    <FormText className="ms-1 errorText">
                                        {errors.email?.message}
                                    </FormText>

                                </Col>
                            </FormGroup>
                        </Row>

                        <Row className="mb-3">
                            <FormGroup>
                                <Col className="mb-2"><label className="labels">Subject</label></Col>
                                <Col>
                                    <input id="subject" type="text" className="formInput"
                                        {...register("subject")} />

                                    <FormText className="ms-1 errorText">
                                        {errors.subject?.message}
                                    </FormText>

                                </Col>
                            </FormGroup>
                        </Row>

                        <Row className="mb-3">
                            <FormGroup>
                                <Col className="mb-2"><label className="labels">Your message</label></Col>
                                <Col>
                                    <textarea id="formTextArea"
                                        {...register("textArea")} />

                                    <FormText className="ms-1 errorText">
                                        {errors.textArea?.message}
                                    </FormText>

                                </Col>
                            </FormGroup>
                        </Row>

                        <Row className="mb-3">
                            <Col>
                                <button className="mx-auto d-block" id="btnSubmit">Submit</button>
                            </Col>
                        </Row>
                    </form>

                </div>

            </div>, document.querySelector("#getInTouchArticle")
        


    );

}
export default Modal;