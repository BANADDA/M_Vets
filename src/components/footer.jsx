import { Button, IconButton, Typography } from "@material-tailwind/react";
import emailjs from "emailjs-com";
import { useState } from "react";

const CURRENT_YEAR = new Date().getFullYear();
const LINKS = ["Organisation", "About Us", "Team", "Products", "Blog"];
const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function Footer() {
  const [{ name, email, subject, message }, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!subject) newErrors.subject = "Subject is required";
    if (!message) newErrors.message = "Message is required";
    return newErrors;
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    setErrors({});
    emailjs
      .sendForm("service_8v6syun", "template_ou88xf5", e.target, "8XQcAphyr4W8Y4DCs")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <footer className="pb-5 p-10 md:pt-10">
      <div className="container flex flex-col mx-auto">
        <div className="flex !w-full py-10 mb-5 md:mb-20 flex-col justify-center !items-center bg-gray-900 max-w-6xl mx-auto rounded-2xl p-5 ">
          <Typography
            className="text-2xl md:text-3xl text-center font-bold"
            color="white"
          >
            Ready to Make a Difference?
          </Typography>

          <Typography
            color="white"
            className=" md:w-7/12 text-center my-3 !text-base"
          >
            Explore our platform to learn more about how we&apos;re transforming livestock health through data and AI. Whether you&apos;re a veterinarian, researcher, policymaker, or livestock farmer, together we can make a meaningful impact on global animal welfare.
          </Typography>
          <div className="flex w-full md:w-fit gap-3 mt-2 flex-col md:flex-row">
            <Button color="white" size="md">
              Explore M-Vet
            </Button>
          </div>
        </div>
        
        {/* Contact Us Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 p-10 rounded-2xl mb-10">
          <div className="md:w-1/2 flex flex-col items-start">
            <Typography
              className="text-lg md:text-xl font-bold mb-3"
              color="blue-gray"
            >
              Contact Us
            </Typography>
            <Typography
              color="blue-gray"
              className="mb-3"
            >
              How can I help you? Fill in the form or drop an email 📬
            </Typography>
            <div className="flex items-center mb-2">
              <i className="fa fa-phone mr-2" aria-hidden="true"></i>
              <Typography color="blue-gray">+256 775 441448</Typography>
            </div>
            <div className="flex items-center mb-2">
              <i className="fa fa-envelope mr-2" aria-hidden="true"></i>
              <Typography color="blue-gray">mutembesa.daniel@gmail.com</Typography>
            </div>
            {/* <div className="flex items-center">
              <i className="fa fa-globe mr-2" aria-hidden="true"></i>
              <Typography color="blue-gray">webflow</Typography>
            </div> */}
          </div>
          <div className="md:w-1/2 mt-5 md:mt-0">
            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              {errors.name && <span className="text-red-500">{errors.name}</span>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              {errors.email && <span className="text-red-500">{errors.email}</span>}
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={subject}
                onChange={handleChange}
                className="border p-2 rounded"
              />
              {errors.subject && <span className="text-red-500">{errors.subject}</span>}
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={handleChange}
                className="border p-2 rounded"
                rows="4"
              ></textarea>
              {errors.message && <span className="text-red-500">{errors.message}</span>}
              <Button color="blue" size="md" type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center !justify-between">
          <Typography
            as="a"
            href=""
            variant="h6"
            className="text-gray-900"
          >
            M-Vet
          </Typography>
          <ul className="flex justify-center my-4 md:my-0 w-max mx-auto items-center gap-4">
            {LINKS.map((link, index) => (
              <li key={index}>
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="white"
                  className="font-normal !text-gray-700 hover:!text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
          <div className="flex w-fit justify-center gap-2">
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-twitter text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-youtube text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-instagram text-lg" />
            </IconButton>
            <IconButton size="sm" color="gray" variant="text">
              <i className="fa-brands fa-github text-lg" />
            </IconButton>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="text-center mt-12 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR} A Product{" "}
          <a href="">
            Of M-Vet
          </a>
          .
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
