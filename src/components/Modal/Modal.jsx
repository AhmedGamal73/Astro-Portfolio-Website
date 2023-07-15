import { useState } from "react";
import ConsaltantForm from "../Form/ContactForms/ConsaltantForm";
import { Schedule } from "./Schedule";
import { userDate } from "../../global/appoinmentStore";
import "./../../styles/Modal.scss";

// First Step Address
const Address = () => {
  return (
    <>
      <h1>What's Your Address</h1>
      <input
        type="text"
        id="government"
        placeholder="Your Government"
        required
      />

      <input type="text" id="city" placeholder="Your City" required />
    </>
  );
};
// First Step Address

// Third Step Info
const Information = () => {
  return (
    <>
      <h1>Tell us about yourself</h1>
      <ConsaltantForm />
    </>
  );
};
// Third Step Info

// Third Step Info
const ThankYou = () => {
  return (
    <>
      <h1>Thank You For Communicating With Us We Will Call In The Time</h1>
    </>
  );
};
// Third Step Info

export const Modal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const content = [<Address />, <Schedule />, <Information />, <ThankYou />];

  console.log(userDate);

  if (!onClose) return null;

  function next() {
    currentStep < content.length - 1
      ? () => setCurrentStep(currentStep + 1)
      : onClose;
  }
  return (
    <div className="overlay">
      <div
        className={`modal-container 
         ${isOpen ? "open" : ""}`}
      >
        <div className="modal-up">
          <div className="modal-meta">
            {currentStep != 0 ? (
              <button
                className="back-btn"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                ←
              </button>
            ) : (
              <h1></h1>
            )}
            <h4>Make oppoinment</h4>
            <button className="close-btn" onClick={onClose}>
              X
            </button>
          </div>
        </div>
        <div className="modal-content">{content[currentStep]}</div>
        {currentStep <= content.length && (
          <button onClick={next} className="btn-stroke-blue-heavy next-btn">
            {currentStep == content.length - 1 ? "Submit" : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};
