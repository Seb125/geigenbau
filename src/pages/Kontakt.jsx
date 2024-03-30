import image from "../assets/images/geigenbau-werkstatt.jpg";
import handel from "../assets/images/handel.jpg";
import Footer from "../components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function Test() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
      const response = await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {to_email:"schwarz.duscheleit@hotmail.de",
        subject: "Email von " + mail,
      message: message});
      console.log(response);

      console.log("Email sent successfully");
    } catch (error) {
      console.log(error);
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
            <form onSubmit={handleSubmit}
              className=" d-flex flex-column position-relative needs-validation col-md-8 col-lg-6 col-xl-4"
              noValidate
            >
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <div className="valid-feedback"> </div>
                <div className="invalid-feedback">
                  Bitte geben Sie Ihren Namen ein
                </div>
              </div>
              <div className="form-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="validationCustom02"
                  placeholder="E-Mail"
                  value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  required
                />

                <div className="valid-feedback"></div>
                <div className="invalid-feedback">
                  Bitte geben Sie eine valide Email Adresse an
                </div>
              </div>
              <div className="form-group mb-4">
                <textarea
                  className="form-control"
                  id="validationTextarea"
                  placeholder="Nachricht"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
                <div className="valid-feedback"></div>
                <div className="invalid-feedback">
                  Bitte geben Sie hier Ihre Nachricht ein
                </div>
              </div>
              <div className="form-group form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Datenschutzerklärung zustimmen
                </label>
                <div className="invalid-feedback">
                  Sie müssen vor dem Absenden zustimmen.
                </div>
              </div>
              <button
                className="btn btn-primary align-self-center mt-4 mb-5"
                type="submit"
              >
                Absenden
              </button>
            </form>
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
