import { FormWrapper } from "../FormWrapper";

type AddressData = {
  street: string;
  city: string;
  state: string;
  zip: string;
  title: string;
};

type AddressFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
  street,
  city,
  state,
  zip,
  updateFields,
  title,
}: AddressFormProps) {
  return (
    <FormWrapper title="Verify Your Details">
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
