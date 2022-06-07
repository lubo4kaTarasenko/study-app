import React, {useState} from 'react'

const Input = (props) => {
  const [focused, setFocused] = useState(false)
  const { label, onChange, errorMessage, id, ...inputProps} = props;

  const handleFocus = (e) => {
    setFocused(true)
  }

  return (
    <div className='form-input'>
      <label>{label}</label>
      <div>
        <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
        <span className='error'>{errorMessage}</span>
      </div>
    </div>
  )
}

export default Input
