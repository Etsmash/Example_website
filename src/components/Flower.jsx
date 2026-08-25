import { forwardRef } from 'react'

const ANGLES = [0, 60, 120, 180, 240, 300]

const Flower = forwardRef(function Flower({ petal, center, style }, ref) {
  return (
    <div ref={ref} data-flower="1" style={style}>
      <svg viewBox="-50 -50 100 100" width="100%" height="100%">
        {ANGLES.map((angle) => (
          <ellipse key={angle} cx="0" cy="-27" rx="13" ry="23" fill={petal} transform={`rotate(${angle})`} />
        ))}
        <circle r="11" fill={center} />
      </svg>
    </div>
  )
})

export default Flower
