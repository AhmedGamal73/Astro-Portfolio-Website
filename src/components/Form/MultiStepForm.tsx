import { useMultistepForm } from "./useMultistepForm";
import "../../styles/MultiStepForm.scss";
import { FormEvent } from "react";
import { UserForm } from "./JobForms/UserForm";
import { AccountForm } from "./JobForms/AccountForm";
import { AddressForm } from "./JobForms/AddressForm";

const MultiStepForm = () => {
  const { step, steps, isFirstStep, isLastStep, currentStepIndex, next, prev } =
    useMultistepForm([
      <UserForm key={1} />,
      <AddressForm key={2} />,
      <AccountForm key={3} />,
    ]);

  function submitForm(e: FormEvent) {
    e.preventDefault();
    next();
  }

  const stepTitle = ["Information", "CV", "Questions"];

  return (
    <>
      <form onSubmit={submitForm}>
        <div className="form_steps-container">
          {steps.map((step, index) => (
            <div className="form_step-wrapper">
              <div
                className={`form__step-box ${
                  currentStepIndex == index ? "active" : ""
                }`}
              >
                <span className="step-num">{index + 1}</span>
              </div>
              <h6>{stepTitle[index]}</h6>
            </div>
          ))}
        </div>

        <span className="steps-counter">
          step {currentStepIndex + 1} / {steps.length}
        </span>
        <div className="bottom-container">
          {step}
          <div className="btns-container">
            {!isFirstStep && (
              <button className="prev-btn" type="button" onClick={prev}>
                Back
              </button>
            )}
            <button className="next-btn" type="submit">
              {isLastStep ? "Finish" : "Next Step"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default MultiStepForm;
