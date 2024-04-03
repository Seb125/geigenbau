import image from "../assets/images/geigenbau-werkstatt.jpg";
import handel from "../assets/images/handel.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "../components/Form";
import Spinner from "../components/Spinner";

function Test() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(false);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if(honeypot !== false) {
      emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
      const response = await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          to_email: "schwarz.duscheleit@hotmail.de",
          subject: "Email von " + mail,
          message: message,
        }
      );
      console.log(response);

      console.log("Email sent successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setSent(true);
      setHoneypot(false);
    }
  };

  (function () {
    "use strict";
    window.addEventListener(
      "load",
      function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        });
      },
      false
    );
  })();

  return (
    <div className="position-relative">
      <div className="container-fluid bg-no-repeat bg-cover position-relative background-container-small">
        <div className="overlay-two"></div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="d-flex flex-column align-items-center m-5 position-relative text-container-two">
            <div className="d-flex flex-md-row flex-column align-items-center mb-3">
              <h1 className="me-md-2 ">Schwarz Duscheleit</h1>
              <h1>Geigenbau</h1>
            </div>
            <div className="d-flex flex-column align-items-center mb-5">
              <h2>Handel</h2>
            </div>
            <div className="d-flex flex-column align-items-center position-relative mb-5">
              <h2>Kontakt</h2>
              <div className="d-flex flex-row">
                <span className="d-md-inline d-none">Email:&nbsp;</span>
                <span> schwarz.duscheleit@arcor.de</span>
              </div>
              <span>Tel: 030 3015564</span>
              <span>Halmstrasse 2</span>
              <span>14050 Berlin</span>
            </div>
            {sent ? (
              <h2>Deine Nachricht wurde gesendet!</h2>
            ) : loading ? (
              <Spinner />
            ) : (
              <Form
                name={name}
                mail={mail}
                message={message}
                honeypot={honeypot}
                setName={setName}
                setMail={setMail}
                setMessage={setMessage}
                setHoneypot={setHoneypot}
                handleSubmit={handleSubmit}
              />
            )}

            <div className="position-relative mt-5">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;
