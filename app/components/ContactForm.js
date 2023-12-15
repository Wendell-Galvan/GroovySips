"use client";
import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Noto_Serif } from "next/font/google";

const notoSerif = Noto_Serif({ subsets: ["latin"] });

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    event_date: "",
    guest_count: "50",
    budget: "200",
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
      guest_count: "50",
      budget: "200",
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
      placeholder: "425-953-6808",
      pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}",
      required: "",
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
      value: formData.guest_count,
    },
    {
      label: "Estimated Budget",
      type: "range",
      name: "budget",
      min: "100",
      max: "1000",
      step: "10",
      value: formData.budget,
    },
    {
      type: "textarea",
      name: "message",
      placeholder: "Tell us a little about your event",
      value: formData.message,
    },
    {
      type: "text",
      name: "referral",
      placeholder: "How did you hear about us?",
      value: formData.referral,
    },
  ];

  return (
    <form onSubmit={sendEmail} className={notoSerif.className}>
      {formFields.map((field, index) => (
        <div key={index} className="mx-auto max-w-screen-md">
          <label className="block text-sm font-medium pt-2">
            {field.label}
          </label>
          {field.type === "range" ? (
            <div className="flex items-center">
              <input
                type={field.type}
                name={field.name}
                min={field.min}
                max={field.max}
                step={field.step}
                onChange={(event) => handleChange(event, field.name)}
                value={field.value}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
              />
              <span className="ml-2 text-gray-700">${field.value}</span>
            </div>
          ) : field.type === "textarea" ? (
            <textarea
              name={field.name}
              rows="6"
              placeholder={field.placeholder}
              onChange={(event) => handleChange(event, field.name)}
              value={field.value}
              className="block p-2.5 w-full text-sm text-gray bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              onChange={(event) => handleChange(event, field.name)}
              value={field.value}
              pattern={field.pattern}
              min={field.min}
              max={field.max}
              step={field.step}
              className="p-2.5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full"
            />
          )}
        </div>
      ))}
      <div className="flex justify-center items-center p-4">
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
