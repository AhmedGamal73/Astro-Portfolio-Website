import "../../../styles/ContactForm.scss";

const ConsaltantForm = () => {
  return (
    <div>
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
    </div>
  );
};

export default ConsaltantForm;
