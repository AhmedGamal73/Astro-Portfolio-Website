import '../../../styles/ContactForm.scss';

const RegistrationForm = () => {
  return (
    <>
      <div >
        <form id="contact-form" method="post">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            required
          />
          <select
            required
            defaultValue="select"
            id="type"
          >
            <option value="">I,m Asking About...</option>
            <option value="male">Accounting</option>
            <option value="fmale">Taxis</option>
            <option value="fmale">Small Company</option>
            <option value="fmale">Other</option>
          </select>
          
          <textarea
            placeholder="Your Suggestion"
            id="suggestion"
            name="suggestion"
            required
          ></textarea>
          <div className="btn-cont">
            <button
              className="btn-stroke-blue-heavy"
              type="submit"
              id="submit"
              name="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div id="error"></div>
      <div id="success-msg"></div>
    </>
  );
}

export default RegistrationForm