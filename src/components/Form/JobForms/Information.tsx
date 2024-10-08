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
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper
      title="Contact information"
      subtitle="Tell us about yourself and how we can contact you :)"
    >
      <div className="field-wrapper">
        <label>Name</label>
        <input
          autoFocus
          placeholder="Enter your name"
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
          placeholder="Enter your phone number"
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
          placeholder="Enter your age"
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
        <label>Job Code (optional)</label>
        <input
          placeholder="Get it from our facebook page"
          type="text"
          value={jobCode}
          onChange={(e) => updateFields({ jobCode: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Job Title</label>
        <select
          required
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
    </FormWrapper>
  );
}
