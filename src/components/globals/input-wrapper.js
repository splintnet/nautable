export default function InputWrapper({icon, children}) {
  return (
    <div className="relative w-full bg-white rounded shadow-sm">
      {icon}
      <div className="relative">
        {children}
      </div>
    </div>
  )
}
