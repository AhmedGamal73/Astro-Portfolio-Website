import React, { useState } from "react";

type CertificateData = {
  certificate: string;
  major: string;
};

type EducationDataProps = CertificateData & {
  updateEducationFields: (fields: Partial<CertificateData>) => void;
};

function Certificate({
  certificate,
  major,
  updateEducationFields,
}: EducationDataProps) {
  const handleCertificateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEducationFields({ certificate: e.target.value });
  };

  const handleMajorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateEducationFields({ major: e.target.value });
  };
  return (
    <fieldset>
      <legend>Certificate/Degree</legend>
      <input
        autoFocus
        type="text"
        placeholder="Certificate"
        value={certificate}
        onChange={handleCertificateChange}
        required
      />
      <input
        type="text"
        placeholder="Major"
        value={major}
        onChange={handleMajorChange}
        required
      />
    </fieldset>
  );
}

export function Education({
  updateEducationFields,
  major,
  certificate,
}: EducationDataProps) {
  const [inputList, setInputList] = useState<JSX.Element[]>();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const onAddBtnClick = () => {
    setCurrentStepIndex((current) => current + 1);
    const newCertificate = {
      certificate: "",
      major: "",
      id: currentStepIndex + 1,
    };
    console.log(inputList);

    setInputList((prev) =>
      prev.concat(
        <Certificate
          {...newCertificate}
          updateEducationFields={updateEducationFields}
          key={prev.length}
        />
      )
    );
    console.log(newCertificate, certificate, major);
  };

  const onRemoveBtnClick = () => {
    setCurrentStepIndex((current) => current - 1);
    setInputList((prev) => prev.slice(0, prev.length - 1));
  };

  const STYLE_BTN = {
    fontSize: "1rem",
    padding: "1rem",
  };

  return (
    <div>
      <div
        style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
        className="form-cont"
      >
        {inputList}
      </div>
      <div className="form-cont">
        <button style={STYLE_BTN} onClick={onAddBtnClick}>
          Add +
        </button>
        {currentStepIndex > 1 ? (
          <button style={STYLE_BTN} onClick={onRemoveBtnClick}>
            Remove
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
