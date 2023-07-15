import { FormWrapper } from "../FormWrapper";
import { z } from "zod";

type UserInformationData = {
  nationality: string;
  religion: string;
  socialStatus: string;
  nationalId: string;
};

type UserDetailedInfoFormProps = UserInformationData & {
  updateFields: (fields: Partial<UserInformationData>) => void;
};

export function DetailedInformation({
  nationality,
  religion,
  socialStatus,
  nationalId,
  updateFields,
}: UserDetailedInfoFormProps) {
  return (
    <FormWrapper title="Information" subtitle="Let's get to know you">
      <div className="field-wrapper">
        <label>Nationality</label>
        <input
          autoFocus
          placeholder="Enter your country"
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
          placeholder="Enter your religion"
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
          placeholder="Find it in your national card"
          type="text"
          value={nationalId}
          onChange={(e) => updateFields({ nationalId: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
}
