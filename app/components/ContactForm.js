"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    event_date: "",
    guest_count: "",
    budget: "",
    message: "",
    referral: "",
  });

  const form = useRef();

  const handleChange = (event, fieldName) => {
    setFormData({ ...formData, [fieldName]: event.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
    };

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID",
        templateParams
      )
      .then(
        (result) => {
          console.log(result.text);
          alert(
            "Thank you for reaching out! We will reach out as soon as your message is received. Cheers!"
          );
        },
        (error) => {
          console.log(error.text);
          alert("Sorry, it looks like something went wrong. Please try again");
        }
      );

    //clear form fields
    setFormData({
      user_name: "",
      user_email: "",
      user_phone: "",
      event_date: "",
      guest_count: "",
      budget: "",
      message: "",
      referral: "",
    });
  };

  const formFields = [
    {
      label: "Name",
      type: "text",
      name: "user_name",
      placeholder: "Your name",
    },
    {
      label: "Email",
      type: "email",
      name: "user_email",
      placeholder: "Your email address",
    },
    {
      label: "Phone Number",
      type: "tel",
      name: "user_phone",
      placeholder: "Your phone number",
    },
    {
      label: "Event Date",
      type: "date",
      name: "user_name",
      placeholder: "Your name",
    },
    {
      label: "Estimated Guest Count",
      type: "number",
      name: "guest_count",
      min: "10",
      max: "300",
      value: "50",
    },
    {
      label: "Estimated Budget",
      type: "range",
      name: "budget",
      min: "100",
      max: "1000",
      step: "10",
      value: "200",
    },
    {
      type: "text",
      name: "message",
      placeholder: "Tell us a little about your event",
    },
    {
      type: "text",
      name: "referral",
      placeholder: "How did you hear about us?",
    },
  ];

  return (
    <div
      id="contact"
      className="py-8 lg:pt-24 px-4 mx-auto max-w-screen-sm"
    ></div>
  );
};

export default ContactForm;
