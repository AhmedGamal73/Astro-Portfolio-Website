import { ReactNode } from "react";
import "../../styles/FormWrapper.scss";

type FormWrapperProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

export function FormWrapper({ title, subtitle, children }: FormWrapperProps) {
  return (
    <>
      <div className="container">
        <h4 className="step-title">{title}</h4>
        <p className="step-subtitle">{subtitle}</p>
      </div>
      <div className="form-data-wrapper">{children}</div>
    </>
  );
}
