/* 
We should focuse in the pillars 
    1. Custom component that will hold all of our 
        funcions: (1-nextStep, 2-prevStep, 3-goTo)

            1. we should keep track of current step.
            2. Move forward and backwords throughout steps.
            3. Go to specific step.

    2. Each step in the form should be in a individual component


*/
import { ReactElement, useState } from "react"

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)

  function next() {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) return i
      return i + 1
    })
  }

  function prev() {
    setCurrentStepIndex(i => {
      if (i <= 0) return i
      return i - 1
    })
  }

  function goTo(index: number) {
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    prev,
  }
}