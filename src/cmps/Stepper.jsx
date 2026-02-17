import { Fragment } from 'react'
import '../assets/styles/cmps/Stepper.css'

const STEPS = [
  { id: 1, label: 'Research' },
  { id: 2, label: 'Ideation' },
  { id: 3, label: 'Design' },
  { id: 4, label: 'Takeaway' },
]

export function Stepper({ activeStep = 1 }) {
  return (
    <div className="stepper-wrapper">
      <div className="stepper" role="navigation" aria-label="Progress">
        {STEPS.map((step, index) => (
          <Fragment key={step.id}>
            {index > 0 && <span className="stepper-connector" aria-hidden="true" />}
            <span className="stepper-step">
              <span
                className={`stepper-circle ${step.id === activeStep ? 'active' : ''}`}
                aria-current={step.id === activeStep ? 'step' : undefined}
              >
                {step.id}
              </span>
              <span className="stepper-label">{step.label}</span>
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  )
}
