import { FormWrapper } from "../FormWrapper";
import { z } from "zod";

type UserInformationData = {
  firstName: string;
  age: string;
  gender: string;
  jobCode: string;
  jobTitle: string;
  advertiser: string;
  phoneNum: string;
  nationality: string;
  religion: string;
  socialStatus: string;
  nationalId: string;
};

type UserFormProps = UserInformationData & {
  updateFields: (fields: Partial<UserInformationData>) => void;
};

export function Information({
  firstName,
  phoneNum,
  age,
  gender,
  jobCode,
  jobTitle,
  advertiser,
  nationality,
  religion,
  socialStatus,
  nationalId,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Information" subtitle="Let's get to know you">
      <div className="field-wrapper">
        <label>Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>WhatsApp Number</label>
        <input
          required
          type="tel"
          name="phone"
          value={phoneNum}
          onChange={(e) => updateFields({ phoneNum: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Age</label>
        <input
          required
          min={1}
          type="number"
          value={age}
          onChange={(e) => updateFields({ age: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Gender</label>
        <select
          required
          defaultValue="select"
          id="gender"
          value={gender}
          onChange={(e) => updateFields({ gender: e.target.value })}
        >
          <option value="">Select an Option</option>
          <option value="male">Male</option>
          <option value="fmale">Fmale</option>
        </select>
      </div>
      <div className="field-wrapper">
        <label>Job Code</label>
        <input
          required
          type="text"
          value={jobCode}
          onChange={(e) => updateFields({ jobCode: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Job Title</label>
        <select
          required
          defaultValue="select"
          value={jobTitle}
          onChange={(e) => updateFields({ jobTitle: e.target.value })}
        >
          <option value="">Select an Option</option>
          <option value="male">Trainee</option>
          <option value="fmale">Accountant</option>
          <option value="fmale">References</option>
          <option value="fmale">IT</option>
          <option value="fmale">Tax Accountant</option>
          <option value="fmale">Secretarial</option>
        </select>
      </div>
      <div className="field-wrapper">
        <label>Where did you know about us</label>
        <select
          required
          defaultValue="select"
          value={advertiser}
          onChange={(e) => updateFields({ advertiser: e.target.value })}
        >
          <option value="">Select an Option</option>
          <option value="male">Facebook</option>
          <option value="fmale">Instagram</option>
          <option value="fmale">LinkedIn</option>
          <option value="fmale">Wazzaf</option>
          <option value="fmale">Forasna</option>
          <option value="fmale">Other</option>
        </select>
      </div>
      <div className="field-wrapper">
        <label>Nationality</label>
        <input
          autoFocus
          required
          type="text"
          value={nationality}
          onChange={(e) => updateFields({ nationality: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Religion</label>
        <input
          required
          type="text"
          value={religion}
          onChange={(e) => updateFields({ religion: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Social status</label>
        <select
          required
          defaultValue="select"
          id="socialStatus"
          value={socialStatus}
          onChange={(e) => updateFields({ socialStatus: e.target.value })}
        >
          <option value="">Select an Option</option>
          <option value="male">Singel</option>
          <option value="fmale">Married</option>
        </select>
      </div>
      <div className="field-wrapper">
        <label>National ID</label>
        <input
          required
          type="text"
          value={nationalId}
          onChange={(e) => updateFields({ nationalId: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
}
