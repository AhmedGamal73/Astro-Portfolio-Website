import "../../../styles/ContactForm.scss";

const ConsaltantForm = () => {
  return (
    <div id="consaltant">
      <h2 style={{ textAlign: "center" }}>
        {" "}
        Tell Us About You And Your Business
      </h2>

      <input autoFocus placeholder="Name" required type="text" />
      <input placeholder="Government" required type="text" />
      <input placeholder="Email" required type="email" />
      <input placeholder="Phone Number" required type="tel" />
      <input required placeholder="Company Name" type="text" />
      <input placeholder="Company Domain" type="text" />
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
