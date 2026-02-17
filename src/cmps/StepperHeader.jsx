import '../assets/styles/cmps/StepperHeader.css'

export function StepperHeader({ number, word }) {
  return (
    <header className="stepper-header" role="banner">
      <h2 className="stepper-header-title">
        {number}. {word}
      </h2>
    </header>
  )
}
