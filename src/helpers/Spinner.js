export default function SmallLoader({ size, thickness, color, className }) {
  return (
    <div
      style={{
        width: `${size ? size : 20}px`,
        height: `${size ? size : 20}px`,
        borderRadius: '100%',
        border: `${thickness ? thickness : 2}px solid ${
          color ? color : 'white'
        }`,
        borderTop: `${thickness ? thickness : 2}px solid transparent`,
      }}
      className={`rotate ` + className}
    ></div>
  )
}
