export function scrollToTopInstant() {
  const html = document.documentElement
  const body = document.body
  const prev = html.style.scrollBehavior
  html.style.scrollBehavior = 'auto'
  body.style.scrollBehavior = 'auto'
  window.scrollTo(0, 0)
  html.scrollTop = 0
  body.scrollTop = 0
  html.style.scrollBehavior = prev
  body.style.scrollBehavior = ''
}
