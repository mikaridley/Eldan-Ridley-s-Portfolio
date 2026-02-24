import '../assets/styles/cmps/ScrollToTop.css'
import backToTopImg from '../assets/imgs/quantex/Back to top.png'

export function ScrollToTop() {
  const onScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      className="scroll-to-top"
      onClick={onScrollToTop}
      aria-label="Scroll to top"
    >
      <img src={backToTopImg} alt="" className="scroll-to-top-img" />
    </button>
  )
}
