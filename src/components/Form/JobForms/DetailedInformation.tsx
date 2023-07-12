import { FormWrapper } from "../FormWrapper";
import { z } from "zod";

type UserDetailedInfoData = {
  socialStatus: string;
  nationality: string;
  religion: string;
  nationalId: string;
};

type UserDetailedInfoProps = UserDetailedInfoData & {
  updateFields: (fields: Partial<UserDetailedInfoData>) => void;
};

export function DetailedInformation({
  nationality,
  religion,
  socialStatus,
  nationalId,
  updateFields,
}: UserDetailedInfoProps) {
  return (
    <FormWrapper title="Information" subtitle="Let's get to know you">
      <div className="field-wrapper">
        <label>Nationality</label>
        <input
          autoFocus
          type="text"
          value={nationality}
          onChange={(e) => updateFields({ nationality: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Religion</label>
        <input
          type="text"
          value={religion}
          onChange={(e) => updateFields({ religion: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Social status</label>
        <select
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
          type="text"
          value={nationalId}
          onChange={(e) => updateFields({ nationalId: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
}
