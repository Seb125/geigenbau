import { useState } from "react";
import emailjs from "@emailjs/browser";

function Kontakt() {
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
    <div className="container-fluid bg-no-repeat bg-cover position-relative background-container">
    <div className="overlay-two"></div>
    
    <form className=" position-relative needs-validation "  noValidate>
    <div className=" justify-content-center">
  <div className="form-row">
    <div className="col-md-4 mb-3">
      
      <input type="text" className="form-control" id="validationCustom01" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <div className="valid-feedback">
        
      </div>
    </div>
    <div className="col-md-4 mb-3">
      
      <input type="text" className="form-control" id="validationCustom02" placeholder="E-Mail" value={mail} onChange={(e) => setMail(e.target.value)} required />
      <div className="valid-feedback">
        
      </div>
    </div>
    <div className="col-md-4 mb-3">
      
      <textarea className="form-control" id="validationTextarea" placeholder="Nachricht" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <div className="valid-feedback">
        
      </div>
    </div>
    </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
      <label className="form-check-label" htmlFor="invalidCheck">
        Datenschutzerklärung zustimmen
      </label>
      <div className="invalid-feedback">
        Sie müssen vor dem Absenden zustimmen.
      </div>
    </div>
  </div>
  <button className="btn btn-primary" type="submit">Absenden</button>
  </div>
</form>
</div>
    
  
  
    
  );
}

export default Kontakt;
