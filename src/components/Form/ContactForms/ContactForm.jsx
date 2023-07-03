import '../../../styles/ContactForm.scss'

const ContactForm = () => {

  return (
    <>
      <div >
        <form id="contact-form" method="post">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Full Name"
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
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            type="tel"
            id="phone"
            name="phonw"
            placeholder="Phone Number"
            required
          />
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Address"
            required
          />
          <textarea
            placeholder="Your Message"
            id="message"
            name="message"
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

export default ContactForm