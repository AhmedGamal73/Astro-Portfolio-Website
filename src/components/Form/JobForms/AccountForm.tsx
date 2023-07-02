import { FormWrapper } from "../FormWrapper";

type AccountData = {
  email: string;
  password: string;
  title: string;
};

type AccountFormProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export function AccountForm({
  email,
  password,
  updateFields,
  title,
}: AccountFormProps) {
  return (
    <FormWrapper title="Verify Your Details">
      <div className="field-wrapper">
        <label>Email</label>
        <input
          autoFocus
          required
          type="email"
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
        />
      </div>
      <div className="field-wrapper">
        <label>Password</label>
        <input
          required
          type="password"
          value={password}
          onChange={(e) => updateFields({ password: e.target.value })}
        />
      </div>
    </FormWrapper>
  );
}
