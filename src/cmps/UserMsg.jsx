import { eventBus } from '../services/event-bus.service'
import { useState, useEffect, useRef } from 'react'

export function UserMsg() {
  const [msg, setMsg] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const timeoutIdRef = useRef()

  useEffect(() => {
    const unsubscribe = eventBus.on('show-msg', msg => {
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current)

      setMsg(msg)

      setTimeout(() => {
        setIsVisible(true)
      }, 50)

      timeoutIdRef.current = setTimeout(closeMsg, 3000)
    })

    return () => unsubscribe()
  }, [])

  function closeMsg() {
    setIsVisible(false)

    setTimeout(() => {
      setMsg(null)
    }, 600)
  }

  if (!msg) return null

  return (
    <section className={`user-msg ${isVisible ? 'visible' : ''}`}>
      {msg?.txt}
    </section>
  )
}
