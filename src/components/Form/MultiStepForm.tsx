import { useMultistepForm } from "./useMultistepForm";
import "../../styles/MultiStepForm.scss";
import { FormEvent } from "react";
import { Information } from "./JobForms/Information";
import { CVForm } from  "./JobForms/CVForm";
import { Education } from "./JobForms/Education";

const MultiStepForm = () => {
  const { step, steps, isFirstStep, isLastStep, currentStepIndex, next, prev } =
    useMultistepForm([
      <Information key={1} />,
      <Education key={3} />,
      <CVForm key={2} />
    ]);

  function submitForm(e: FormEvent) {
    e.preventDefault();
    next();
  }

  const stepTitle = ["Information", "Education", "CV" ];

  return (
    <div className="job-app-cont">
      <form onSubmit={submitForm}>
        <div className="left-col">
          <div className="steps-cont">
            <div className="form_steps-container">
              {steps.map((step, index) => (
                <div className="form_step-wrapper">
                  <div
                    className={`form__step-box ${
                      currentStepIndex >= index ? "active" : ""
                    }`}
                  >
                    <span className="step-num">{currentStepIndex > index ? '✔' :  index + 1}</span>
                  </div>
                  <h6>{stepTitle[index]}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right-col">
          <div className="form-content-container">
            <span className="steps-counter">
                step {currentStepIndex + 1} / {steps.length}
            </span>
            {step}
          </div>
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
    </div>
  );
};

export default MultiStepForm;
