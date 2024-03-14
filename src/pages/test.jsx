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
      // emailjs.init(import.meta.env.VITE_EMAIL_USER_ID);
      // const response = await emailjs.send(import.meta.env.VITE_EMAIL_SERVICE_ID, import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
      //   {to_email:"schwarz.duscheleit@hotmail.de",
      //   from_name: from,
      // message: text});
      // console.log(response);

      console.log('Email sent successfully');
    } catch (error) {
      console.log(error);
    }
  };

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName('needs-validation');
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  return (
    <div className="position-relative">
      <div className="container-fluid bg-no-repeat bg-cover position-relative background-container">
        <div className="overlay-two"></div>
        <div className="d-flex flex-row justify-content-center ">
          <div className="d-flex flex-column align-items-center m-5 position-relative text-container-two">
          <form className=" d-flex flex-column position-relative needs-validation col-md-8 col-lg-6 col-xl-4" noValidate>
  
    <div className="form-group">
      <input type="text" className="form-control" id="validationCustom01" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <div className="valid-feedback"></div>
    </div>
    <div className="form-group">
      <input type="text" className="form-control" id="validationCustom02" placeholder="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)} required />
      <div className="valid-feedback"></div>
    </div>
    <div className="form-group">
      <textarea className="form-control" id="validationTextarea" placeholder="Nachricht" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
      <div className="valid-feedback"></div>
    </div>
    <div className="form-group form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Datenschutzerklärung zustimmen
      </label>
      <div className="invalid-feedback">Sie müssen vor dem Absenden zustimmen.</div>
    </div>
    <button className="btn btn-primary align-self-center" type="submit">Absenden</button>
  
</form>

            <div
              className="d-flex flex-column flex-md-row justify-content-center align-items-center position-relative mt-5 mb-5"
              style={{ width: "80%" }}
            >
              <div className="me-md-5 mb-5 mb-md-0">
                <img src={handel} style={{ width: "300px" }} />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <span>
                  Wir bieten Streichinstrumente und Bögen vom Schülerinstrument
                  bis zum Meisterinstrument an.
                </span>
                <span>
                  <br></br>
                  Diese können bei uns angespielt werden und gegebenenfalls in
                  den eigenen Räumen ausprobiert werden.
                </span>
                <br></br>
                <span>
                  Saiten und weiteres Zubehör sind ebenfalls erhältlich.
                </span>
              </div>
            </div>

            <div className="position-relative text-container mb-5">
              <hr
                className=""
                style={{
                  color: "black",
                  backgroundColor: "black",
                  height: 5,
                }}
              />
            </div>

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
