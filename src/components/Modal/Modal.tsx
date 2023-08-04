import { useState, FC } from "react";
import { userDate } from "../../global/appoinmentStore";
import "./../../styles/Modal.scss";
import ConsaltantForm from "../Form/ContactForms/ConsaltantForm";

const ThankYou = () => {
  return (
    <>
      <h1> 🫶 Thank You For Communicating With Us We Will Call In The Time</h1>
    </>
  );
};

type AppoinmentData = {
  government: String;
  city: String;
  name: String;
  lastName: String;
  issue: String;
  phoneNumber: Number;
};

const INITIAL_DATA: AppoinmentData = {
  government: "",
  city: "",
  name: "",
  lastName: "",
  issue: "",
  phoneNumber: 0,
};

export const Modal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const content: JSX.Element[] = [<ConsaltantForm />, <ThankYou />];

  console.log(userDate);

  if (!onClose) return null;

  function next() {
    currentStep < content.length - 1
      ? setCurrentStep(currentStep + 1)
      : onClose();
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
          <button
            onClick={() => next()}
            className="btn-stroke-blue-heavy next-btn"
          >
            {currentStep == content.length - 1 ? "Close" : "Submit"}
          </button>
        )}
      </div>
    </div>
  );
};
