import { FormWrapper } from "../FormWrapper";

type UserData = {
  firstName: string;
  lastName: string;
  age: string;
  gender: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function UserForm({
  firstName,
  lastName,
  age,
  gender,
  street,
  city,
  state,
  zip,
  updateFields,
}: UserFormProps) {
  const url =
    "https://backstage.taboola.com/backstage/api/1.0/resources/countries/us/cities";
  const options = { method: "GET" };

  fetch(url, options)
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));

  return (
    <FormWrapper title="Let's get to know you">
      <div className="field-wrapper">
        <label>First Name</label>
        <input
          autoFocus
          required
          type="text"
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Last Name</label>
        <input
          required
          type="text"
          value={lastName}
          onChange={(e) => updateFields({ lastName: e.target.value })}
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
          onChange={(e) => updateFields({ gender: e.target.value })}
        >
          <option value="">Select an Option</option>
          <option value="male">Male</option>
          <option value="fmale">Fmale</option>
        </select>
      </div>
      <div className="field-wrapper">
        <label>Street</label>
        <input
          autoFocus
          required
          type="text"
          value={street}
          onChange={(e) => updateFields({ street: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>City</label>
        <input
          required
          type="text"
          value={city}
          onChange={(e) => updateFields({ city: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>State</label>
        <input
          required
          type="text"
          value={state}
          onChange={(e) => updateFields({ state: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Zip</label>
        <input
          required
          type="text"
          value={zip}
          onChange={(e) => updateFields({ zip: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
}
