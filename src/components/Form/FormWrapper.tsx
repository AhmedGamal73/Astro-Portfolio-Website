import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
};

const STYLE_P = {
  color: "grey",
  fontFamily: "poppins light"
}

export function FormWrapper({ title,subtitle, children }: FormWrapperProps) {
  return (
    <>
      <div>
        <h4 className="step-title">{title}</h4>
        <p style={STYLE_P} className="step-title">{subtitle}</p>
      </div>
      <form className="form-data-wrapper">{children}</form>
    </>
  );
}
