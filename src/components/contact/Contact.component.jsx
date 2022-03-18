import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext
} from "react";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import emailjs from "@emailjs/browser";
import {
  ContactContainer,
  ContactWrapper,
  ContactTitle,
  ContactSubTitle,
  ContactDescription,
  ContactForm,
  ContactFromAddressInput
} from "./contact.styles";
import CustomInput from "../customInput/CustomInput.component";
import CustomButton from "../customButton/CustomButton.component";
import { ThemeContext } from "../../context";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const contactRef = useRef();
  const formRef = useRef();

  const [contactPosition, setContactPosition] = useState(Infinity);
  const [contactVisibility, setContactVisibility] = useState(0);

  const handleScroll = useCallback(async (e) => {
    const contactElement = contactRef.current;
    const contactPosition = contactElement.getClientRects()[0].y;
    setContactPosition(contactPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (!contactVisibility && window.innerHeight * 0.4 >= contactPosition) {
      setContactVisibility(1);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, contactPosition, contactVisibility]);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_o87fd5o",
        "template_2osshgr",
        formRef.current,
        "ORS6nvw8z6wahaGhq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <ContactContainer ref={contactRef} id="contact" darkMode={darkMode}>
      <ContactWrapper visibility={contactVisibility}>
        <ContactDescription>
          <ContactTitle>CONTACT</ContactTitle>
          <ContactSubTitle>
            I am available to work on your projects and bring your ideas to
            life. I am just a click away.
          </ContactSubTitle>
        </ContactDescription>
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <ContactFromAddressInput>
            <CustomInput
              type="text"
              name="user_name"
              label="Your Name"
            ></CustomInput>
            <CustomInput
              type="email"
              name="user_email"
              label="Your Email"
            ></CustomInput>
            <CustomInput
              type="text"
              name="user_subject"
              label="Subject"
            ></CustomInput>
          </ContactFromAddressInput>
          <CustomInput
            type="textarea"
            name="user_text"
            label="Your Message"
          ></CustomInput>
          <CustomButton>Submit</CustomButton>
        </ContactForm>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
