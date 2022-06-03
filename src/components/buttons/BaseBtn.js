import React from 'react'

const BaseBtn = (props) => {
  return (
    <div className={`btn ${props.type}`} >
      { props.text }
    </div>
  )
}

export default BaseBtn
