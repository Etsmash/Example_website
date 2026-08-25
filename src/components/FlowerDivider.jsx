import useInView from '../hooks/useInView'
import Flower from './Flower'

const BLOOMS = [
  { hue: 340, size: 46, top: '10%', left: '6%', delay: 0 },
  { hue: 28, size: 34, top: '55%', left: '16%', delay: 0.15 },
  { hue: 265, size: 40, top: '20%', left: '30%', delay: 0.3 },
  { hue: 150, size: 30, top: '60%', left: '42%', delay: 0.45 },
  { hue: 340, size: 52, top: '15%', left: '55%', delay: 0.1 },
  { hue: 28, size: 36, top: '58%', left: '68%', delay: 0.35 },
  { hue: 200, size: 42, top: '22%', left: '80%', delay: 0.25 },
  { hue: 340, size: 30, top: '55%', left: '90%', delay: 0.5 },
]

export default function FlowerDivider() {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <div className={`flower-divider ${inView ? 'is-blooming' : ''}`} ref={ref}>
      <div className="flower-divider-stem" />
      {BLOOMS.map((b, i) => (
        <Flower
          key={i}
          hue={b.hue}
          className="flower-bloom"
          style={{
            top: b.top,
            left: b.left,
            width: `${b.size}px`,
            height: `${b.size}px`,
            transitionDelay: `${b.delay}s`,
          }}
        />
      ))}
      <p className="flower-divider-caption">watch your potential bloom</p>
    </div>
  )
}
