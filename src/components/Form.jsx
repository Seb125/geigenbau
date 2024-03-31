function Form(props) {
  const { name, mail, message, setName, setMail, setMessage, handleSubmit } =
    props;
  return (
    <form
      onSubmit={handleSubmit}
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
        <div className="invalid-feedback">Bitte geben Sie Ihren Namen ein</div>
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
  );
}

export default Form;
