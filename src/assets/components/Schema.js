import * as yup from "yup";

//*Yup schema used for form validation in Modal.js
export const Schema = yup.object().shape({
    name: yup
    .string()    
    .matches("^[a-zA-Z]+$", "Name can only contain letters")
    .required("Name is required"),

    email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),

    subject: yup
    .string()
    .required("Subject is required")
    .min(5, "Must be between 5-25 characters")
    .max(25, "Must be between 5-25 characters"),

    textArea: yup
    .string()
    .required("Message is required")
    .min(20, "Must be between 20-300 characters")
    .max(300, "Must be between 20-300 characters")

})