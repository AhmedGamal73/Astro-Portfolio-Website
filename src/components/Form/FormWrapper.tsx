import { ReactNode } from "react"
import './globalForm.scss';

type FormWrapperProps = {
  title: string
  subtitle: string
  children: ReactNode
}

export function FormWrapper({title, children }: FormWrapperProps) {
  return (
    <>
      <h3 className="step-title" >
        {title}
      </h3>
      <div className="form-data-wrapper">
        {children}
      </div>
    </>
  )
}