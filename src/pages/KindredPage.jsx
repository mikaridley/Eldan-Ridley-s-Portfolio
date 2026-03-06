import { useState, useRef, useEffect } from 'react'
import { ImgsCarousel } from '../cmps/ImgsCarousel'
import { Stepper } from '../cmps/Stepper'
import { StepperHeader } from '../cmps/StepperHeader'

import kindredProjectImg from '../assets/imgs/kindred/Project image - Kindred.png'

const kindredStepperModules = import.meta.glob('../assets/imgs/kindred/stepper/*.{png,jpg,jpeg,webp}', { eager: true })
const getKindredStepperImg = (name) => {
  const key = Object.keys(kindredStepperModules).find((k) => k.toLowerCase().includes(name.toLowerCase()))
  return key ? kindredStepperModules[key].default : null
}

const kindredCarouselModules = import.meta.glob('../assets/imgs/kindred/carousel/*', { eager: true })
const KINDRED_CAROUSEL_IMAGES = Object.keys(kindredCarouselModules)
  .sort()
  .map((key) => kindredCarouselModules[key].default)
  .filter(Boolean)

const STEP_HEADER_OFFSET = 120
const STEPPER_SCROLL_OFFSET = 100

export function KindredPage() {
  const step1Ref = useRef(null)
  const step2Ref = useRef(null)
  const step3Ref = useRef(null)
  const step4Ref = useRef(null)
  const stepRefs = [step1Ref, step2Ref, step3Ref, step4Ref]
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    const onScroll = () => {
      let current = 1
      stepRefs.forEach((ref, i) => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top
          if (top <= STEP_HEADER_OFFSET) current = i + 1
        }
      })
      setActiveStep(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleStepClick = (stepNumber) => {
    const ref = stepRefs[stepNumber - 1]?.current
    if (ref) {
      const y = ref.getBoundingClientRect().top + window.scrollY - STEPPER_SCROLL_OFFSET
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <section className="kindred-page projects-layout">

      <section>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione beatae, adipisci nobis ab in facere exercitationem itaque aliquam dolorem optio porro dolore tempore mollitia soluta eos laboriosam impedit, ipsa amet quisquam expedita alias? Voluptatibus delectus libero dolorem excepturi iure maiores consequuntur, consectetur ab eligendi cum, commodi voluptates corporis id impedit.
      </section>
    </section>
  )
}
