import "../../../styles/ContactForm.scss";

var styling = {
  input: {
    fontSize: "3vw",
  },
};
const ConsaltantForm = () => {
  return (
    <div>
      <form className="contact-form">
        <input autoFocus placeholder="First name" required type="text" />
        <input placeholder="Last name" required type="text" />

        <input placeholder="Email" required type="email" />
        <input required placeholder="Phone Number" type="tel" />
        <textarea
          placeholder="Your issue"
          id="consalt"
          name="consalt"
          required
        ></textarea>
      </form>
      <div id="error"></div>
      <div id="success-msg"></div>
    </div>
  );
};

export default ConsaltantForm;
