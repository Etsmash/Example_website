export default function ImageSlot({ shape = 'rect', placeholder = '', className = '', style = {} }) {
  return (
    <div className={`image-slot image-slot-${shape} ${className}`} style={style}>
      {placeholder && <span>{placeholder}</span>}
    </div>
  )
}
