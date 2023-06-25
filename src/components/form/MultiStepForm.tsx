import { useMultistepForm } from "./useMultistepForm";
import './MultiStepForm.scss';
import { FormEvent } from "react";

const MultiStepForm = () => {   
    const { step, steps, isFirstStep, currentStepIndex, next, prev } = useMultistepForm([
        <div>Sign Up</div>,
        <div>Message</div>,
        <div>Checkbox</div>,
    ])

    function submitForm (e: FormEvent) {
        e.preventDefault();
        next();
    }


    return (
        <>        
            <form onSubmit={submitForm}>
                <div className="form_steps-container">
                    {steps.map(step => (
                        <div className="form_step-wrapper">
                            <div className="form__step-box">
                                <span className="step-num">
                                    {steps.indexOf(step) + 1}
                                </span>
                            </div>
                            <h6>{step}</h6>
                        </div>
                        
                    ))}
                    {currentStepIndex+1}/{steps.length}
                </div>

                {step}
                <div className="btns-container">
                    <button type="button" onClick={prev}>Back</button>
                    <button type="button" onClick={next}>Next</button>
                </div>
            </form>
        </>

    )
}


export default MultiStepForm;