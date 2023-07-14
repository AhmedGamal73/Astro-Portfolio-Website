import { useMultistepForm } from "./useMultistepForm";
import "../../styles/MultiStepForm.scss";
import { FormEvent, useState } from "react";
import { Information } from "./JobForms/Information";
import { Education } from "./JobForms/Education";
import { Language } from "./JobForms/Languages";
import { EmploymentHistory } from "./JobForms/EmploymentHistory";
import { DetailedInformation } from "./JobForms/DetailedInformation";

type FormData = {
  firstName: string;
  phoneNum: string;
  age: string;
  gender: string;
  jobCode: string;
  jobTitle: string;
  advertiser: string;
  socialStatus: string;
  nationality: string;
  religion: string;
  nationalId: string;
};

const INITIAL_DATA: FormData = {
  firstName: "",
  phoneNum: "",
  age: "",
  gender: "",
  jobCode: "",
  jobTitle: "",
  advertiser: "",
  socialStatus: "",
  nationality: "",
  religion: "",
  nationalId: "",
};

const MultiStepForm = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [languages, setLanguages] = useState([]);
  const [employmentHistory, setEmploymentHistory] = useState([]);
  const [education, setEducation] = useState([]);

  const getLangData = (languages: Array<string>) => {
    setLanguages(languages);
  };
  const geEmploymentHisData = (employmentHistory: Array<string>) => {
    setEmploymentHistory(employmentHistory);
  };
  const getEducationData = (education: Array<string>) => {
    setEducation(education);
  };

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { step, steps, isFirstStep, isLastStep, currentStepIndex, next, prev } =
    useMultistepForm([
      <Information {...data} updateFields={updateFields} />,
      <DetailedInformation {...data} updateFields={updateFields} />,
      <Language getLangData={getLangData} />,
      <Education getEducationData={getEducationData} />,
      <EmploymentHistory geEmploymentHisData={geEmploymentHisData} />,
    ]);

  function submitForm(e: FormEvent) {
    e.preventDefault();
    if (currentStepIndex == 2 && languages.length === 0) {
      alert("please enter a value");
    } else if (currentStepIndex == 3 && education.length === 0) {
      alert("please enter a value");
    } else if (currentStepIndex == 4 && employmentHistory.length === 0) {
      alert("please enter a value");
    } else {
      next();
    }
  }

  const stepTitle = [
    "Language",
    "Information",
    "Personal Information",
    "Education",
    "Job History",
  ];

  return (
    <div className="job-app-cont">
      <form onSubmit={submitForm}>
        <div className="left-col">
          <h2 className="steps-title">BP Career</h2>
          <div className="steps-cont">
            <div className="form_steps-container">
              {steps.map((step, i) => (
                <div className="form_step-wrapper">
                  <div
                    className={`form__step-box ${
                      currentStepIndex >= i ? "active" : ""
                    }`}
                  >
                    <span className="step-num">
                      {currentStepIndex > i ? "✔" : i + 1}
                    </span>
                  </div>
                  <h6>{stepTitle[i]}</h6>
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
