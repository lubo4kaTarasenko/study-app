import React from 'react'

const Input = (props) => {
  const { label, onChange, errorMessage, id, ...inputProps} = props;

  return (
    <div className='form-input'>
      <label>{label}</label>
      <div>
        <input {...inputProps} onChange={onChange} />
        <span className='error'>{errorMessage}</span>
      </div>
    </div>
  )
}

export default Input
