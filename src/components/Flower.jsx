const PETAL_ANGLES = [0, 60, 120, 180, 240, 300]

export default function Flower({ className = '', style = {}, hue = 340 }) {
  return (
    <svg
      className={`flower ${className}`}
      style={style}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g className="flower-petals" style={{ '--hue': hue }}>
        {PETAL_ANGLES.map((angle) => (
          <ellipse
            key={angle}
            className="petal"
            cx="50"
            cy="28"
            rx="10"
            ry="19"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}
      </g>
      <circle className="flower-center" cx="50" cy="50" r="9" />
    </svg>
  )
}
