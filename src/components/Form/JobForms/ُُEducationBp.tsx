import { FormWrapper } from "../FormWrapper";
import { useState } from 'react'
import '../../../styles/EducationForm.css';
import { number, string } from "zod";


type EducationData = {
  certificate: string;
  major: string;
  university: string;
  country: string;
  year: string;
  grade: string;
};

type EducationDataProps = EducationData & {
  updateFields: (fields: Partial<EducationData>) => void;

};

function Fieldset ({
   certificate,
   grade,
   major,
   university,
   country,
   year,
   updateFields
  }: EducationDataProps) {

  return (
    <fieldset>
      <legend>Certificate/Degree</legend>
      <input 
        autoFocus
        type="text" 
        placeholder="Certificate" 
        value={certificate}
        onChange={(e) => updateFields({ certificate: e.target.value })}
        required
      />
      <input 
        type="text" 
        placeholder="Grade" 
        value={grade}
        onChange={(e) => updateFields({ grade: e.target.value })}
        required
      />
      <input 
        type="text" 
        placeholder="Major" 
        value={major}
        onChange={(e) => updateFields({ major: e.target.value })}
        required
      />
      <input 
        type="text" 
        placeholder="University / School" 
        value={university}
        onChange={(e) => updateFields({ university: e.target.value })}
        required
      />
      <input 
        type="text" 
        placeholder="Country" 
        value={country}
        onChange={(e) => updateFields({ country: e.target.value })}
        required
      />
      <input 
        type="number" 
        placeholder="Year Passed" 
        value={year}
        onChange={(e) => updateFields({ year: e.target.value })}
        required
      />
    </fieldset>
  );  
};



export function Education({
  updateFields
}) {
    const [inputList, setInputList] = useState<JSX.Element[]>([]);
    const [currentStepIndex, setCurrentStepIndex] = useState(1);

    const handleEducationDataProps = (fields: Partial<EducationData>) => {
      console.log(fields)
    }


    const onAddBtnClick = () => {
      setCurrentStepIndex((curent) => curent + 1);
      const newEducationData = { 
        certificate: "", 
        major: "", university: "", 
        country: "", year: "", 
        grade: "" 
      };
      updateFields({ educationData: [newEducationData] });
      setInputList((prevInputList) => 
          prevInputList.concat(
            <Fieldset 
            {...newEducationData} 
            updateFields={updateFields} 
            key={inputList.length} 
          />
        )
      );
    };

    const onRemoveBtnClick = () => {
      setInputList((prevInputList) => prevInputList.slice(0, prevInputList.length - 1));
      setCurrentStepIndex((curent) => curent - 1);
    };
  
    const STYLE_BTN = {
      fontSize: "1rem",
      padding: "1rem"
    };
  
    return (
      <FormWrapper title="Education" subtitle="Give Information About Your Education">
      <div style={{display: "flex", width: "100%", flexWrap: "wrap"}} className="form-cont">
        {inputList}
      </div>
      <div className="form-cont">
        <button style={STYLE_BTN} onClick={onAddBtnClick}>
            Add +
        </button>
        {currentStepIndex > 1 ?
          (
            <button style={STYLE_BTN} onClick={onRemoveBtnClick}>
              Remove
            </button>
          )
          : ""}
      </div>
      </FormWrapper>
  
    );
  };






