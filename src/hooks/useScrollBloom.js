import { useEffect } from 'react'

// Fades and scales up elements marked [data-flower] as they enter the lower
// part of the viewport while scrolling, easing back out if scrolled past.
export default function useScrollBloom() {
  useEffect(() => {
    let raf = null

    const bloom = () => {
      const h = window.innerHeight || 800
      document.querySelectorAll('[data-flower]').forEach((el) => {
        const r = el.getBoundingClientRect()
        const raw = (h * 0.94 - r.top) / (h * 0.5)
        const p = Math.max(0, Math.min(1, raw))
        const ease = p * p * (3 - 2 * p)
        el.style.opacity = String(ease * 0.95)
        el.style.transform = `scale(${0.15 + 0.85 * ease}) rotate(${-38 + 38 * ease}deg)`
      })
    }

    const tick = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        bloom()
      })
    }

    document.addEventListener('scroll', tick, true)
    window.addEventListener('resize', tick)
    bloom()

    return () => {
      document.removeEventListener('scroll', tick, true)
      window.removeEventListener('resize', tick)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
}
