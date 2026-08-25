import Flower from './Flower'
import useScrollBloom from '../hooks/useScrollBloom'

const FLOWER_SPECS = [
  { side: 'left', pos: '2%', size: 132 },
  { side: 'right', pos: '3%', size: 96 },
  { side: 'left', pos: '6%', size: 68 },
  { side: 'right', pos: '1%', size: 150 },
  { side: 'left', pos: '1%', size: 88 },
  { side: 'right', pos: '7%', size: 60 },
  { side: 'left', pos: '4%', size: 116 },
  { side: 'right', pos: '2%', size: 104 },
  { side: 'left', pos: '8%', size: 72 },
  { side: 'right', pos: '4%', size: 138 },
  { side: 'left', pos: '2%', size: 92 },
  { side: 'right', pos: '6%', size: 64 },
]

const JITTER = [0, 1.6, -1.4, 0.9, -0.8, 1.2]

// Terracotta & sage, alternating.
const PALETTE = [
  { petal: 'var(--color-accent-200)', center: 'var(--color-accent-400)' },
  { petal: 'var(--color-accent-2-200)', center: 'var(--color-accent-2-400)' },
  { petal: 'var(--color-accent-300)', center: 'var(--color-accent-500)' },
  { petal: 'var(--color-accent-2-300)', center: 'var(--color-accent-2-500)' },
]

const COUNT = FLOWER_SPECS.length

export default function FlowerField() {
  useScrollBloom()

  return (
    <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {FLOWER_SPECS.map((f, i) => {
        const c = PALETTE[i % PALETTE.length]
        const top = (16 + ((i + 0.5) / COUNT) * 76 + JITTER[i % JITTER.length]).toFixed(2) + '%'
        const style = {
          position: 'absolute',
          top,
          width: f.size + 'px',
          height: f.size + 'px',
          opacity: 0,
          transform: 'scale(0.15) rotate(-38deg)',
          transition: 'opacity 120ms linear',
          willChange: 'transform, opacity',
          [f.side]: f.pos,
        }
        return <Flower key={i} petal={c.petal} center={c.center} style={style} />
      })}
    </div>
  )
}
