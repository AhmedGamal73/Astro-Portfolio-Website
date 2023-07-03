import '../../../styles/ContactForm.scss';

const ConsaltantForm = () => {
  return (
    <div>
      <form className='contact-form'>
        <input
          autoFocus
          placeholder='Your Email'
          required
          type="email"
        />
        <input
          required
          placeholder='Your Phone Number'
          type="tel"
        />
        <textarea
            placeholder="Your issue"
            id="consalt"
            name="consalt"
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
        <div id="error"></div>
      <div id="success-msg"></div>
      </div>
  );
}

export default ConsaltantForm