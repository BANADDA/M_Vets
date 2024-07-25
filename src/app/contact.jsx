"use client";
// import emailjs from "emailjs-com";
import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    // replace below with your own Service ID, Template ID and Public Key from your EmailJS account
    // emailjs
    //   .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       clearState();
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <section className="py-8 px-8 lg:py-10 lg:pt-5 bg-gradient-to-r from-blue-400 to-indigo-500">
      <div className="container mx-auto grid lg:grid-cols-2 gap-8" id="contact">
        <div className="w-full max-w-lg mx-auto">
          <div className="section-title mb-6">
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            <p className="text-white">
              Please fill out the form below to send us an email and we will get back to you as soon as possible.
            </p>
          </div>
          <form name="sentMessage" validate onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control p-2 rounded"
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                id="email"
                name="email"
                className="form-control p-2 rounded"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <textarea
                name="message"
                id="message"
                className="form-control p-2 rounded"
                rows="4"
                placeholder="Message"
                required
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn bg-white text-blue-500 p-2 rounded shadow-lg">
              Send Message
            </button>
          </form>
        </div>
        <div className="text-white space-y-6">
          <div className="contact-item">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <p>
              <span className="font-bold">Address:</span> {props.data ? props.data.address : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span className="font-bold">Phone:</span> {props.data ? props.data.phone : "loading"}
            </p>
          </div>
          <div className="contact-item">
            <p>
              <span className="font-bold">Email:</span> {props.data ? props.data.email : "loading"}
            </p>
          </div>
          <div className="flex space-x-4">
            <a href={props.data ? props.data.facebook : "/"} className="text-2xl">
              <i className="fa fa-facebook"></i>
            </a>
            <a href={props.data ? props.data.twitter : "/"} className="text-2xl">
              <i className="fa fa-twitter"></i>
            </a>
            <a href={props.data ? props.data.youtube : "/"} className="text-2xl">
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
      <div id="footer" className="mt-8 text-center text-white">
        <p>
          &copy; 2023 Issaaf Kattan React Land Page Template. Design by{" "}
          <a href="http://www.templatewire.com" rel="nofollow" className="underline">
            TemplateWire
          </a>
        </p>
      </div>
    </section>
  );
};
